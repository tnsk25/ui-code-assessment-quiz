import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizQuestions from './components/QuizQuestions/QuizQuestions'

export const App = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Lucid</h1>
        <h2>Welcome to UI Team code assessment!</h2>
        <br/>
        <QuizQuestions />
    </div>
);
