const file_btn = document.getElementById('file-btn');
const file_input = document.getElementById('file-input');
file_btn.addEventListener('click', async () => {
  try {
    await navigator.share({ files: [file_input.files[0]] });
  } catch (error) {
    console.error(error);
  }
});

const link_btn = document.getElementById('link-btn');
link_btn.addEventListener('click', async () => {
  try {
    await navigator.share({ title: document.title, url: "" });
  } catch (error) {
    console.error(error);
  }
});