export function MedalList({medals, onDelete}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>국가명</th>
                    <th>금메달</th>
                    <th>은메달</th>
                    <th>동메달</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {medals.map((item) => (
                    <tr key={item.country}>
                        <td>{item.country}</td>
                        <td>{item.gold}</td>
                        <td>{item.silver}</td>
                        <td>{item.bronze}</td>
                        <td>
                            <button onClick={() => onDelete(item.country)}>삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}