// Hàm toggleSubdirectory cho việc mở/đóng các danh mục con
function toggleSubdirectory(subdirectoryId, itemId) {
  // Lấy subdirectory và item tương ứng
  const subdirectory = document.getElementById(subdirectoryId);
  const item = document.getElementById(itemId);

  if (subdirectory) {
    const isHidden = subdirectory.classList.contains('hidden');

    // Luôn ẩn tất cả các subdirectory và loại bỏ class 'active' trên các item
    document.querySelectorAll('[id^="subdirectory"]').forEach((sub) => sub.classList.add('hidden'));
    document.querySelectorAll('[id^="item"]').forEach((itm) => itm.classList.remove('active'));

    // Nếu subdirectory đang ẩn, hiển thị nó và thêm class 'active' vào item tương ứng
    if (isHidden) {
      subdirectory.classList.remove('hidden');
      item.classList.add('active');
    }
  }
}

// Hiệu ứng rơi cánh hoa Tết
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
  flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Tốc độ rơi ngẫu nhiên
  flower.style.animationDelay = `${Math.random() * 5}s`; // Delay ngẫu nhiên
  document.getElementById('falling-flowers').appendChild(flower);

  // Xóa cánh hoa sau khi rơi xong
  setTimeout(() => {
    flower.remove();
  }, 5000);
}

// Kích hoạt hiệu ứng cánh hoa
setInterval(createFlower, 300);
