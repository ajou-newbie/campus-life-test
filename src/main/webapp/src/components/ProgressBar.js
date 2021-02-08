const ProgressBar = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 0,
        marginTop: '10px',
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed / 9 * 100}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: '0.5s'
    }

    return (
        < div
    style = {containerStyles} >
        < div
    style = {fillerStyles} >
        < /div>
        < /div>
)
    ;
};

export default ProgressBar;