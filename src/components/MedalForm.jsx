import { useState } from "react";
import { MedalInput } from "./Medalinput";

export function MedalForm({ onAdd, onUpdate }) {
    const contentArr = ["국가명", "금메달", "은메달", "동메달"];
    const [formData, setFormData] = useState({
        국가명: "",
        금메달: 0,
        은메달: 0,
        동메달: 0,
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData["국가명"]) {
            alert("국가명을 입력하세요!");
            return;
        }
        onAdd({
            country: formData["국가명"],
            gold: Number(formData["금메달"]),
            silver: Number(formData["은메달"]),
            bronze: Number(formData["동메달"]),
        });
        setFormData({ 국가명: "", 금메달: 0, 은메달: 0, 동메달: 0 });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!formData["국가명"]) {
            alert("수정할 국가명을 입력하세요!");
            return;
        }
        onUpdate({
            country: formData["국가명"],
            gold: Number(formData["금메달"]),
            silver: Number(formData["은메달"]),
            bronze: Number(formData["동메달"]),
        });
        setFormData({ 국가명: "", 금메달: 0, 은메달: 0, 동메달: 0});
    };

    return (
        <>
            <h1>2024 파리 올림픽</h1>
            <form>
                {contentArr.map((text) => (
                    <MedalInput
                        key={text}
                        content={text}
                        value={formData[text]}
                        onChange={(value) => handleChange(text, value)}
                    />
                ))}
                <button type='submit' onClick={handleSubmit}>국가 추가</button>
                <button type='button' onClick={handleUpdate}>업데이트</button>
            </form>
        </>
    );
}