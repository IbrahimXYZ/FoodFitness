window.addEventListener('load', () => {
	const form = document.querySelector("#tracker");
	const input = document.querySelector("#food");
    const calories = document.querySelector("#calories")
	const list = document.querySelector("#tasks");

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const foodVal = input.value;
            const caloriesVal = calories.value;

            const item = document.createElement('div');
            item.classList.add('task');

            const itemContent = document.createElement('div');
            itemContent.classList.add('content');

            item.appendChild(itemContent);

            const foodInput = document.createElement('input');
            foodInput.classList.add('text');
            foodInput.type = 'text';
            foodInput.value = foodVal;
            foodInput.setAttribute('readonly', 'readonly');

            itemContent.appendChild(foodInput);

            const caloriesInput = document.createElement('input');
            caloriesInput.classList.add('text');
            caloriesInput.type = 'text';
            caloriesInput.value = caloriesVal;
            foodInput.setAttribute('readonly', 'readonly');

            itemContent.appendChild(caloriesInput);

            const itemAction = document.createElement('div');
            itemAction.classList.add('actions');
            
            const actionEdit = document.createElement('button');
            actionEdit.classList.add('edit');
            actionEdit.innerText = 'Edit';

            const actionDelete = document.createElement('button');
            actionDelete.classList.add('delete');
            actionDelete.innerText = 'Delete';

            itemAction.appendChild(actionEdit);
            itemAction.appendChild(actionDelete);

            item.appendChild(itemAction);

            list.appendChild(item);

            input.value = '';
            calories.value= '';

            actionEdit.addEventListener('click', (e) => {
                if (actionEdit.innerText.toLowerCase() == "edit") {
                    actionEdit.innerText = "Save";
                    foodInput.removeAttribute("readonly");
                    foodInput.focus();
                } else {
                    actionEdit.innerText = "Edit";
                    foodInput.setAttribute("readonly", "readonly");
                }
            });

            actionDelete.addEventListener('click', (e) => {
                list.removeChild(item);
            });
        });})