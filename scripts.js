function toggleSubdirectory(subdirectoryId, itemId) {
  // Lấy subdirectory và item tương ứng
  const subdirectory = document.getElementById(subdirectoryId);
  const item = document.getElementById(itemId);

  // Kiểm tra nếu subdirectory đã hiển thị
  if (subdirectory) {
    const isHidden = subdirectory.classList.contains('hidden');

    // Luôn ẩn tất cả các subdirectory và loại bỏ class 'active' trên các item
    document.querySelectorAll('[id^="subdirectory"]').forEach((sub) => sub.classList.add('hidden'));
    document.querySelectorAll('[id^="item"]').forEach((item) => item.classList.remove('active'));

    // Nếu subdirectory đang ẩn, hiển thị nó và thêm class 'active' vào item tương ứng
    if (isHidden) {
      subdirectory.classList.remove('hidden');
      item.classList.add('active');
    }
  }
}