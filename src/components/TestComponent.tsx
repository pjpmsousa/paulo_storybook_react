import React from "react";
import styles from "./TestComponent.module.css";

interface TestComponentPros {
    title: string;
    description: string;
}

const TestComponent = ({title, description}: TestComponentPros) => {
    return (
        <div className={styles.teste}>
            <div className={styles.title}>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default TestComponent;