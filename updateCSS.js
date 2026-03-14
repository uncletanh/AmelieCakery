const fs = require('fs');

const cssToAdd = `

.modal-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.modal-size-section {
    margin-bottom: 2rem;
    display: none;
}

.size-section-title {
    font-size: 0.9rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-weight: 500;
}

.size-options-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.size-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.95rem;
    color: var(--text-secondary);
    transition: color 0.2s;
}

.size-option:hover {
    color: var(--text-primary);
}

.size-option input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    margin-right: 0.5rem;
    display: grid;
    place-content: center;
    cursor: pointer;
}

.size-option input[type="radio"]::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: var(--gold-accent);
}

.size-option input[type="radio"]:checked {
    border-color: var(--gold-accent);
}

.size-option input[type="radio"]:checked::before {
    transform: scale(1);
}

.size-option.active {
    color: var(--text-primary);
}
`;

let data = fs.readFileSync('styles.css', 'utf8');
data = data.replace(/(\.modal-title\s*\{[\s\S]*?margin-bottom:\s*)2rem(;[\s\S]*?\})/, '$10.5rem$2' + cssToAdd);
fs.writeFileSync('styles.css', data, 'utf8');
console.log("CSS added successfully!");
