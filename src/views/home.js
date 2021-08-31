export default () => {
    const views = `
    <h1>Hello World</h1>
    <p>hello world with router</p>

    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;
};