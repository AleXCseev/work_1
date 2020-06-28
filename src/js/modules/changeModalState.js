import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(event, elem, props) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        // if (elem.length > 1) {
        //   state[props] = index;
        // } else {
        //   state[props] = item.value;
        // }
        // console.log(state);
        switch (item.nodeName) {
          case "SPAN":
            state[props] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[props] = "cold") : (state[props] = "hot");
              elem.forEach((box, i) => {
                box.checked = false;
                if (index == i) {
                  box.checked = true;
                }
              });
            } else {
              state[props] = item.value;
            }
            break;
          case "SELECT":
            state[props] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
