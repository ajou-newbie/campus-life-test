// Give QuestionText component with "dataParentToChild" prop like below
// <QuestionText dataParentToChild = {1} />
// Reference: https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654 (Parent to Child using Function Components)

import React from 'react';
import styled from 'styled-components';
import questionData from "./question-data.json";

function QuestionText({ dataParentToChild }) {
    return (
        <div>
            <h1>{questionData.question_data[dataParentToChild].question}</h1>
        </div>
    )
}
export default QuestionText;
