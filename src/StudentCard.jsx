function StudentCard({ name = "Unknown Student", age, marks, calculateGrade }) {

  const grade = calculateGrade(marks);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Marks: {marks}</p>
      <p className="grade">Grade: {grade}</p>

      {grade === "A" && (
        <div className="rain">
          <span>🎉</span>
          <span>✨</span>
          <span>🎊</span>
          <span>🌟</span>
        </div>
      )}

      {grade === "Fail" && (
        <div className="rain sad">
          <span>😢</span>
          <span>💔</span>
          <span>😞</span>
        </div>
      )}
       {grade === "B" && (
        <div className="rain sad">
          <span>👌</span>
          <span>✌️</span>
          <span>🤩</span>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
