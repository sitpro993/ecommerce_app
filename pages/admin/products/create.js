import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Typeahead } from "react-bootstrap-typeahead";
import Form from "react-bootstrap/Form";
import Test from "../../../components/Test";

export default function ProductCreate() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [variant, setVariant] = useState({
    title: "",
    img: "",
  });
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);

  const [selectSize, setSelectSize] = useState([]);
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    let tmp = [];
    selectSize.map((i) => {
      tmp.push(i.label);
    });
    setSize(tmp);
  }, [selectSize]);

  //console.log({ title, slug, description, shortDescription, price, size });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Create Product - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <div className="main-create">
        <Form className="row" onSubmit={handleSubmit}>
          <div className="col-8">
            {/* Thông tin chung */}
            <div className="infor">
              <div className="title">
                <span>Thông Tin Chung</span>
              </div>
              <div className="create">
                <p>Tên sản phẩm</p>
                <div className="form-form">
                  <input
                    type="text"
                    name="title"
                    placeholder="Nhập tên sản phẩm"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="create">
                <p>Đường dẫn (slug)</p>
                <div className="form-form">
                  <input
                    type="text"
                    name="slug"
                    placeholder="Nhập đường dẫn"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
              </div>
              <div className="create">
                <p>Mô tả sản phẩm</p>
                <div className="form-form">
                  {editorLoaded ? (
                    <CKEditor
                      editor={ClassicEditor}
                      data={description}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        //console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                      }}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
              <div className="create">
                <p>Trích dẫn</p>
                <div className="form-form">
                  <input
                    type="text"
                    name="shortDescription"
                    placeholder="Trích dẫn sản phẩm"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Thông tin chung */}
            {/* Hình ảnh sản phẩm */}
            <div className="infor">
              <div className="title">
                <span>Biến Thể</span>
              </div>
              <Test />
            </div>
            {/* Hình ảnh sản phẩm */}
          </div>
          <div className="col-4">
            {/* Nhóm sản phẩm */}
            <div className="infor">
              <div className="title">
                <span>Danh mục sản phẩm</span>
              </div>
              <div className="create">
                <div className="form-form">
                  <input type="text" name="name-field" placeholder="Tìm kiếm" />
                </div>
              </div>
            </div>
            {/* Nhóm sản phẩm */}
            {/* Giá sản phẩm */}
            <div className="infor">
              <div className="title">
                <span>Giá Sản Phẩm</span>
              </div>
              <div className="price-infor">
                <div className="price-pay">
                  <p>Giá bán</p>
                  <div className="form-form">
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Giá sản phẩm */}
            {/* Biến thể */}
            <div className="infor">
              <div className="title">
                <span>Kích thước</span>
              </div>
              <div className="create">
                <p>Size</p>
                <div className="new-product-type">
                  <div className="type-2">
                    <div className="form-form">
                      <Typeahead
                        allowNew
                        id="custom-selections-example"
                        multiple
                        newSelectionPrefix="Thêm: "
                        options={[]}
                        placeholder="Thêm kích thước"
                        selected={selectSize}
                        onChange={setSelectSize}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Biến thể */}
          </div>
          <button className="btn col-2 btn-create" type="submit">
            <i className="far fa-plus-square"></i>
            Tạo sản phẩm
          </button>
        </Form>
      </div>
    </>
  );
}

{
  /* Quản lý tồn kho */
}
{
  /* <div className="infor">
            <div className="title">
              <span>Quản lý tồn kho</span>
            </div>
            <div className="new-infor">
              <div className="create-new-infor">
                <div className="price-first">
                  <p>Giá vốn</p>
                  <div className="form-form">
                    <input
                      type="text"
                      name="name-field"
                      placeholder="Chọn loại sản phẩm"
                    />
                  </div>
                </div>
                <div className="infor-profit">
                  <div className="profit-1">
                    <p>Biên lợi nhuận:</p>
                    <p>--</p>
                  </div>
                  <div className="profit-2">
                    <p>Lợi nhuận:</p>
                    <p>0đ</p>
                  </div>
                </div>
              </div>
              <div className="create-new-infor-2">
                <div className="sku">
                  <p>SKU</p>
                  <div className="form-form">
                    <input
                      type="text"
                      name="name-field"
                      placeholder="Chọn loại sản phẩm"
                    />
                  </div>
                </div>
                <div className="barcode">
                  <p>Barcode</p>
                  <div className="form-form">
                    <input type="text" name="name-field" />
                  </div>
                </div>
              </div>
            </div>
            <div className="infor-2">
              <div className="create">
                <p>Tồn kho khả dụng</p>
                <div className="form-form">
                  <input type="text" name="name-field" placeholder="Tìm kho" />
                </div>
              </div>
            </div>
          </div> */
}
{
  /* Quản lý tồn kho */
}

{
  /* Khuyến mãi */
}
{
  /* <div className="infor">
          <div className="title">
            <span>Khuyến mãi</span>
          </div>
          <div className="checkbox">
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    block
                    label="Không áp dụng khuyến mãi"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div> */
}
{
  /* Khuyển mãi */
}

{
  /* <div className="price-sell">
                <p>Giá so sánh</p>
                <div className="form-form">
                  <input type="number" name="price" />
                </div>
              </div> */
}

{
  /* Hiển thị */
}
{
  /* <div className="infor">
          <div className="title">
            <span>Hiển Thị</span>
          </div>
          <div className="checkbox">
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    block
                    label="website"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    block
                    label="Hararetail"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    block
                    label="Shopee.vn"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    block
                    disabled
                    label="Adayroi.com (disabled)"
                    type={type}
                    id={`inline-${type}-3`}
                  />

                  <Form.Check
                    block
                    label="Tiki.vn"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    block
                    disabled
                    label="Lazada.vn (disabled)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    block
                    label="Google"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div> */
}
{
  /* Hiển thị */
}
