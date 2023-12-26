import React from "react";
import banner2 from "../../../assets/hero2.png";
const AboutUs = () => {
  return (
    <div className="hero mt-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner2} className="w-1/2" />
        <div>
          <h1 className="text-5xl font-bold capitalize leading-normal">
            we will take care of everything, so you can get back to relaxing
          </h1>
          <div className="mt-12">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked"  readOnly/>
                <div className="collapse-title text-xl font-medium">
                  How can I add a new task to my task list?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    To add a new task, simply log in to your account and
                    navigate to the "Tasks" or "To-Do" section. Click on the
                    "Add Task" button, enter the task details such as title,
                    description, due date, and any other relevant information,
                    and then click "Save" or "Add Task" to include it in your
                    task list.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Is it possible to set reminders for tasks with specific
                  deadlines?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you can set reminders for tasks with deadlines. When
                    adding or editing a task, you'll find an option to set a due
                    date and time. Once set, the system will automatically send
                    you reminders based on your preferences, helping you stay on
                    top of your tasks.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Can I organize my tasks into different categories or projects?
                </div>
                <div className="collapse-content">
                  <p>
                    Absolutely! Our task management website allows you to
                    organize your tasks efficiently. You can create projects or
                    categories and assign tasks to them. This helps you keep a
                    clear overview of your different responsibilities and
                    ensures that you can manage and prioritize tasks
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
