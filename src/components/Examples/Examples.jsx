import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton'

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? (<p></p>) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            )}
        </section>
    )
}