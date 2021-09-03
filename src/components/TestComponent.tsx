import React from "react";
import styles from "./TestComponent.module.css";

const TestComponent: React.FC = () => {

    return (
        <div className={styles.teste}>
            This is a new component!
        </div>
    )
}

export default TestComponent;