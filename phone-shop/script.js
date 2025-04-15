// Xử lý đăng nhập
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Đăng nhập thành công!");
  });
  
  // Xử lý đăng ký
  document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Đăng ký thành công!");
  });
  
  // Tìm kiếm điện thoại
  function searchProduct() {
    const value = document.getElementById("searchInput").value;
    document.getElementById("searchResult").innerText = "Kết quả tìm kiếm: " + value;
  }
  
  // Thêm điện thoại vào giỏ hàng
  function addToCart(item) {
    const cartList = document.getElementById("cartList");
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
      // Nút sửa
  const editBtn = document.createElement("button");
  editBtn.textContent = "Sửa";
  editBtn.onclick = () => {
    const newName = prompt("Nhập tên mới cho sản phẩm:", item);
    if (newName) {
      li.childNodes[0].textContent = newName + " ";
    }
  };

  // Nút xóa
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xóa";
  deleteBtn.onclick = () => {
    cartList.removeChild(li);
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  cartList.appendChild(li);
  }
  