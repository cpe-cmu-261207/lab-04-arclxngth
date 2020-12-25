import { PreviousMap } from "postcss";

export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.

  return (
    <div>
      <div className="information">
        <div>Course's ID : {props.course_id}</div>
        <div>Grade : {props.grade_txt}</div>
        <div>Credit : {props.credit}</div>
        <button className="del_btn" onClick={() => props.onDeleteCourse(props.course_id)}>X</button>
      </div>
    </div>
  );
};
