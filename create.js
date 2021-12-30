import React from "react";
import Form from 'react-bootstrap/Form'

export default function Create() {
    return (
        <div className="main-create">
            <div className="new">
                {/* Thông tin chung */}
                <div className="infor">
                    <div className="title">
                        <span>Thông Tin Chung</span>
                    </div>
                    <div className="create">
                        <p>Tên sản phẩm</p>
                        <form className="form-form">
                            <input type="text" name="name-field" placeholder="Nhập tên sản phẩm" />
                        </form>
                    </div>
                    <div className="create">
                        <p>Loại</p>
                        <form className="form-form">
                            <input type="text" name="name-field" placeholder="Chọn loại sản phẩm" />
                        </form>
                    </div>
                    <div className="create">
                        <p>Mô tả sản phẩm</p>
                        <form className="form-form">
                            <input type="text" name="name-field" />
                        </form>
                    </div>
                    <div className="create">
                        <p>Trích dẫn</p>
                        <form className="form-form">
                            <input type="text" name="name-field" placeholder="Trích dẫn sản phẩm" />
                        </form>
                    </div>
                </div>
                {/* Thông tin chung */}
                {/* Hình ảnh sản phẩm */}
                <div className="infor">
                    <div className="title">
                        <span>Hình Ảnh Sản Phẩm</span>
                    </div>
                    <div className="img-product">
                        <input accept=".jpeg,.png,.gif,.jpg" type="file" multiple autoComplete="on" />
                    </div>
                </div>
                {/* Hình ảnh sản phẩm */}
                {/* Giá sản phẩm */}
                <div className="infor">
                    <div className="title">
                        <span>Giá Sản Phẩm</span>
                    </div>
                    <div className="price-infor">
                        <div className="price-pay">
                            <p>Giá bán</p>
                            <form className="form-form">
                                <input type="number" name="price" />
                            </form>
                        </div>
                        <div className="price-sell">
                            <p>Giá so sánh</p>
                            <form className="form-form">
                                <input type="number" name="price" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* Giá sản phẩm */}
                {/* Quản lý tồn kho */}
                <div className="infor">
                    <div className="title">
                        <span>Quản lý tồn kho</span>
                    </div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    block
                                    label="Có quản lý tồn kho"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className="new-infor">
                        <div className="create-new-infor">
                            <div className="price-first">
                                <p>Giá vốn</p>
                                <form className="form-form">
                                    <input type="text" name="name-field" placeholder="Chọn loại sản phẩm" />
                                </form>
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
                                <form className="form-form">
                                    <input type="text" name="name-field" placeholder="Chọn loại sản phẩm" />
                                </form>
                            </div>
                            <div className="barcode">
                                <p>Barcode</p>
                                <form className="form-form">
                                    <input type="text" name="name-field" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    block
                                    label="Đồng ý cho đặt khi đã hết hàng"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className="infor-2">
                        <div className="create">
                            <p>Tồn kho khả dụng</p>
                            <form className="form-form">
                                <input type="text" name="name-field" placeholder="Tìm kho" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* Quản lý tồn kho */}
                {/* Biến thể */}
                <div className="infor">
                    <div className="title">
                        <span>Biến thể</span>
                    </div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    block
                                    label="Sản phẩm này có nhiều biến thể. Ví dụ như khác nhau về kích thước, màu sắc."
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className="create">
                        <p>Thuộc tính 1</p>
                        <div className="new-product-type">
                            <div className="type">
                                <select className="new-select">
                                    <option value="1">Kích thước</option>
                                    <option value="2">Màu sắc</option>
                                    <option value="3">Kích thước</option>
                                    <option value="4">Tiêu đề</option>
                                    <option value="5">Kiểu dáng</option>
                                    <option value="6">Tạo tùy chọn mới</option>
                                </select>
                            </div>
                            <div className="type-2">
                                <form className="form-form">
                                    <input type="text" name="name-field" placeholder="Thêm nhãn" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Biến thể */}
            </div>
            <div className="new2">
                {/* Hiển thị */}
                <div className="infor">
                    <div className="title">
                        <span>Hiển Thị</span>
                    </div>
                    <div className="checkbox">
                        <Form>
                            {['checkbox'].map((type) => (
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
                </div>
                {/* Hiển thị */}
                {/* Nhóm sản phẩm */}
                <div className="infor">
                    <div className="title">
                        <span>Nhóm Sản Phẩm</span>
                    </div>
                    <div className="create">
                        <form className="form-form">
                            <input type="text" name="name-field" placeholder="Tìm kiếm" />
                        </form>
                    </div>
                </div>
                {/* Nhóm sản phẩm */}
                {/* Khuyến mãi */}
                <div className="infor">
                    <div className="title">
                        <span>Khuyến mãi</span>
                    </div>
                    <div className="checkbox">
                        <Form>
                            {['checkbox'].map((type) => (
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
                </div>
                {/* Khuyển mãi */}
            </div>
        </div>
    );
}
