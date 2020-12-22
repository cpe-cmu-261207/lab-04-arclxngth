import { useState } from "react";
import { CourseCard } from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
    
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO

    // recalculate GPA
    calculateGPA();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
  }

  return (
    <div>
      <div className="header-bg">
        <h1 className="header-text">
          GPA CALCULATOR
        </h1>
      </div>
      <div>
        <h1 className="topic">My courses</h1>
        {/* TODO display courses */}
        
      </div>
      {/* TODO add course input form */}
      <div>
        <label className="topic">grade</label>
        <input type="text"></input>
        <label></label>
      </div>
      <div>
        <button type="submit" className="add_btn">
          add
        </button>
        <button type="submit" className="calculate_btn">
          calculate
        </button>
      </div>
      {/* TODO display calculated GPA */}
      <div>
        <li id="summaryGPA"></li>
      </div>
    </div>
  );
}

export default App;
