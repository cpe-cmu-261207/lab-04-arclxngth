import { useState } from "react";
import { CourseCard } from "./components/CourseCard";

class MyCourses {
  constructor(id, grade, credit) {
    this.id = id;
    this.grade = grade;
    this.credit = credit;
  }
}

function App() {
  // const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  // const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

  const [id, setId] = useState("");
  const [grade, setGrade] = useState(0);
  const [credit, setCredit] = useState(0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */

  function calculateGPA() {
    // TODO
    let score = 0,
      sum_credit = 0;
    myCourses.forEach((value) => {
      score += value.grade;
      sum_credit += value.credit;
    });

    let gpa = score / sum_credit;

    if(sum_credit == 0) gpa = 0

    return gpa.toFixed(2);
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    let port = new MyCourses(id, "A", credit);
    setMyCourse([...myCourses, port]);

    // recalculate GPA
    calculateGPA();
  }

  function renderCourse() {
    return myCourses.map((value) => {
      return (
        <CourseCard
          course_id={value.id}
          grade={value.grade}
          credit={value.credit}
          key={Math.random()}
        />
      );
    });
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
  }

  function clearCourse(event){
    event.preventDefault();
    
    setMyCourse([]);

    calculateGPA();
  }

  return (
    <div>
      <div className="header">
        <h1>GPA CALCULATOR</h1>
      </div>
      <div>
        <div>
          <div className="content">
            <h1 className="topic">My courses</h1>
            {renderCourse()}
          </div>
          {/* TODO display courses */}
        </div>
        {/* TODO add course input form */}
        <div className="form">
          <div>
            <div>
              <aside className="aside">
                <label className="topic">ID</label>
                <input
                  type="number"
                  className="form-txt"
                  onChange={(e) => setId(e.target.valueAsNumber)}
                ></input>
              </aside>
              <aside className="aside">
                <label className="topic">GRADE</label>
                <select onChange={(e) => setGrade(e.target.value)}>
                  <option select disabled>
                    select grade..
                  </option>
                  <option value="4">A</option>
                  <option value="3.5">B+</option>
                  <option value="3">B</option>
                  <option value="2.5">C+</option>
                  <option value="2">C</option>
                  <option value="1.5">D+</option>
                  <option value="1">D</option>
                  <option value="0">F</option>
                  <option value="-1">W</option>
                </select>
              </aside>
              <aside>
                <label className="topic">CREDIT</label>
                <button className="form-btn btn-1" onClick={() => setCredit(1)}>
                  1
                </button>
                <button className="form-btn btn-2" onClick={() => setCredit(2)}>
                  2
                </button>
                <button className="form-btn btn-3" onClick={() => setCredit(3)}>
                  3
                </button>
              </aside>
            </div>
            <div className="form">
            <button type="submit" className="btn add_btn" onClick={addCourse}>
              add
            </button>
            <button type="submit" className="btn clear_btn" onClick={clearCourse}>
              clear
            </button>
          </div>
          </div>
          {/* TODO display calculated GPA */}
          <div className="renGPA">
            <p>GPA = {calculateGPA()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
