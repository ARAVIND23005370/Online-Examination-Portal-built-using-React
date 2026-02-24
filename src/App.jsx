import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function ExamPage() {
    const inputRef = useRef(null);
    const timerRef = useRef(null);

    const [timeLeft, setTimeLeft] = useState(30);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [answer, setAnswer] = useState("");

    // Auto-focus input
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Timer countdown
    useEffect(() => {
        if (isSubmitted) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timerRef.current);
                    handleSubmit("auto");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [isSubmitted]);

    const handleSubmit = (type = "manual") => {
        if (isSubmitted) return;

        setIsSubmitted(true);
        clearInterval(timerRef.current);

        console.log("Submission Type:", type);
        console.log("Answer:", answer);
        console.log("Time Used:", 30 - timeLeft);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={{ marginBottom: "15px" }}>📝 Online Exam</h2>

                <p style={{ fontSize: "22px", marginBottom: "15px", color: "#000" }}>
                    Time Left: <strong>{timeLeft}</strong> seconds
                </p>

                <input
                    ref={inputRef}
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer..."
                    disabled={isSubmitted}
                    style={styles.input}
                />

                <button
                    onClick={() => handleSubmit("manual")}
                    disabled={isSubmitted}
                    style={{
                        ...styles.button,
                        backgroundColor: isSubmitted ? "#666" : "#007bff",
                        cursor: isSubmitted ? "not-allowed" : "pointer",
                    }}
                >
                    Submit
                </button>

                {isSubmitted && (
                    <p style={{ marginTop: "10px", color: "green" }}>
                        ✔ Submitted
                    </p>
                )}
            </div>
        </div>
    );
}

// Styles
const styles = {
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eef2f3",
    },
    card: {
        background: "white",
        width: "350px",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        color: "#000", // Ensures everything inside card is visible
    },
    input: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        marginBottom: "20px",
    },
    button: {
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        color: "white",
        fontSize: "16px",
    },
};

export default ExamPage;