export function MedalInput({ content, value, onChange }) {
    return (
        <label>
            {content}
            <input
                type={content === "국가명" ? "text" : "number"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={content === "국가명" ? undefined : "0"} 
        />
        </label>
    );
}