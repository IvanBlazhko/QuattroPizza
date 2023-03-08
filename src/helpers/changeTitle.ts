export const changeTitle = () => {
  let siteTitle = document.title;
  let changeTitle: NodeJS.Timeout;

  window.addEventListener('blur', () => {
    let flag = true;
    changeTitle = setInterval(() => {
      document.title = flag ? 'The fastest delivery!' : 'Tasty pizza!';
      flag = !flag;
    }, 4000);
  });
  window.addEventListener('focus', () => {
    document.title = siteTitle;
    clearInterval(changeTitle);
  });
};
