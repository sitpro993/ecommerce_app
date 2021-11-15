import React, { useContext } from "react";
import { deleteItem } from "../../store/Actions";
import { DataContext } from "../../store/GlobalState";

export default function Modal() {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;
  const handleSubmit = () => {
    if (modal.length !== 0) {
      for (const item of modal) {
        if (item.type === "ADD_CART") {
          dispatch(deleteItem(item.data, item.id, item.type));
        }
        dispatch({ type: "ADD_MODAL", payload: [] });
      }
    }

    dispatch(deleteItem(modal.data, modal.id, "ADD_CART"));
    dispatch({ type: "ADD_MODAL", payload: {} });
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-capitalize"
                id="exampleModalLabel"
              ></h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Do you want to delete this item?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleSubmit}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
