document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const error = document.getElementById('formError');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email) {
        error.textContent = "All fields are required.";
      } else if (!emailRegex.test(email)) {
        error.textContent = "Enter a valid email address.";
      } else {
        error.textContent = "";
        alert("Form submitted successfully!");
        this.reset();
      }
    });

    // To-Do List Functionality
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const li = document.createElement('li');
      li.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.style.marginLeft = '1rem';
      removeBtn.onclick = () => li.remove();

      li.appendChild(removeBtn);
      document.getElementById('todo-list').appendChild(li);
      taskInput.value = '';
    }