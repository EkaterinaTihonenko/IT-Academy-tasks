const createItem = () => {
  const li = document.createElement("li");
  li.setAttribute(
    "class",
    "list-group-item d-flex align-items-center justify-content-between"
  );
  return li;
};

const createBlock = (clasName = "") => {
  const div = document.createElement("div");
  if (clasName) {
    div.setAttribute("class", clasName);
  }
  return div;
};

const createInput = (attributes = {}) => {
  const input = document.createElement("input");
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    input.setAttribute(key, attributes[key]);
  });

  return input;
};

const createParagraph = (text = "") => {
  const p = document.createElement("p");
  p.textContent = text;
  p.setAttribute("class", "me-3 m-0");
  return p;
};

const createButton = (attributes = {}) => {
  const btn = document.createElement("button");
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    btn.setAttribute(key, attributes[key]);
  });

  return btn;
};

export const taskItem = ({ isCompleted = false, task = "", id = 0 }) => {
  const li = createItem();
  li.setAttribute("data-id", id);
  const taskContainer = createBlock("d-flex align-items-center");
  const btnContainer = createBlock();
  const formCheck = createBlock("form-check");
  const editButton = createButton({ class: "btn btn-info me-1" });
  const deleteButton = createButton({ class: "btn btn-danger" });
  const paragraph = createParagraph(task);
  const checkbox = createInput({
    type: "checkbox",
    class: "form-check-input",
    value: isCompleted ? "checked" : "",
  });
  editButton.textContent = "Редактировать";
  deleteButton.textContent = "Удалить";
  formCheck.append(checkbox);
  taskContainer.append(formCheck, paragraph);
  btnContainer.append(editButton, deleteButton);
  li.append(taskContainer, btnContainer);

  return li;
};
