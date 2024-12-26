function toggleSubdirectory(subdirectoryId, itemId) {
  const subdirectory = document.getElementById(subdirectoryId);
  const item = document.getElementById(itemId);

  console.log('Subdirectory:', subdirectory);
  console.log('Item:', item);

  if (subdirectory) {
    const isHidden = subdirectory.classList.contains('hidden');

    document.querySelectorAll('[id^="subdirectory"]').forEach((sub) => {
      sub.classList.add('hidden');
      sub.classList.remove('open');
    });
    document.querySelectorAll('[id^="item"]').forEach((item) => item.classList.remove('active'));

    if (isHidden) {
      subdirectory.classList.remove('hidden');
      subdirectory.classList.add('open');
      if (item) {
        item.classList.add('active');
      }
    }
  }
}
