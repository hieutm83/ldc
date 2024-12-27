function toggleSubdirectory(subdirectoryId, itemId) {
  const subdirectory = document.getElementById(subdirectoryId);
  const item = document.getElementById(itemId);

  console.log('Subdirectory:', subdirectory);
  console.log('Item:', item);

  if (subdirectory && item) {
    const isHidden = subdirectory.classList.contains('hidden');

    // Ẩn tất cả các subdirectory và xóa class 'active' trên tất cả các item
    document.querySelectorAll('[id^="subdirectory"]').forEach((sub) => {
      sub.classList.add('hidden');
      sub.classList.remove('open');
    });
    document.querySelectorAll('[id^="item"]').forEach((itm) => itm.classList.remove('active'));

    // Nếu subdirectory đang ẩn, hiển thị nó và thêm class 'active' vào item tương ứng
    if (isHidden) {
      subdirectory.classList.remove('hidden');
      subdirectory.classList.add('open');
      item.classList.add('active');

      // Cuộn subdirectory lên đầu màn hình
      subdirectory.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
