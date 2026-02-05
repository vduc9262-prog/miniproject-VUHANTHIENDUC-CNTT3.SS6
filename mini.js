let loginattempts = 0;

do {
let username = prompt("Mời bạn nhập tài khoản:").trim();

let password = prompt("Mời bạn nhập mật khẩu:").trim();

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        break;
    } else {
        loginattempts++;
        let remaining = 3 - loginattempts;

        if (username !== "admin" && password !== "12345") {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử.`);
        } else if (username !== "admin" ) {
            alert(`Sai tài khoản! Bạn còn ${remaining} lần thử.`);
        } else {
            alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử.`);
        }
    }
    
} while (loginattempts < 3 );

let choice;
let library = ["Toán", "Văn", "Anh"];
 do {
    let menu = "1. Nhập thêm lô sách mới \n" +
               "2. Hiển thị danh sách sách.\n" +
               "3. Tìm kiếm sách.\n" +
               "4. Cập nhật tên sách\n" +
               "5. Đảo ngược thứ tự kệ sách \n" +
               "6. Nhập kho từ nguồn khác.\n"+
               "7.Thoát chương trình.\n"+
               "Vui lòng nhập lựa chọn của bạn : ";

    choice = Number(prompt(menu));

    switch (choice) {
        case 1:

    let danhSachNhap = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");

    if (danhSachNhap) {

        let mangTenSachMoi = danhSachNhap.split(",");

        let soLuongDaThem = 0;

        for (let i = 0; i < mangTenSachMoi.length; i++) {

            let tenSach = mangTenSachMoi[i].trim();

            if (tenSach !== "") {
                library.push(tenSach);
                soLuongDaThem++;
            }
        }

        alert(`Đã thêm thành công ${soLuongDaThem} cuốn sách mới vào thư viện.`);
    }
            break;

        case 2:
        console.log(" DANH SÁCH SÁCH HIỆN CÓ TRONG THƯ VIỆN ");

    if (library.length === 0) {
        console.log("Hiện tại thư viện chưa có sách nào.");
    } else {
        let soThuTu = 1;

        for (let tenSach of library) {
            console.log(`${soThuTu}. ${tenSach}`);
            soThuTu++;
        }
    }

       alert("Danh sách sách đã được hiển thị trên console.\nMở DevTools bằng phím F12 để xem.");

       break;
       
        case 3:
        let tenSachTim = prompt("Nhập tên cuốn sách cần tìm:");

        if (tenSachTim) {

        tenSachTim = tenSachTim.trim();

        if (library.includes(tenSachTim)) {

            let viTri = library.indexOf(tenSachTim);

            alert(`Tìm thấy sách "${tenSachTim}" \n`);

            alert(` Vị trí trong danh sách: số ${viTri + 1} ` );
        
        } else {

            alert(`Không tìm thấy sách "${tenSachTim}" trong thư viện.`);
        }
    } else {

        alert("Bạn chưa nhập tên sách để tìm.");
    }
    break;

    case 4:

    let tenSachCu = prompt("Nhập tên sách cần sửa:");

    if (tenSachCu) {
        tenSachCu = tenSachCu.trim();

        let viTri = library.indexOf(tenSachCu);

        if (viTri !== -1) {
            let tenSachMoi = prompt(`Tìm thấy sách "${tenSachCu}" Nhập tên mới :`);

            if (tenSachMoi) {

                tenSachMoi = tenSachMoi.trim();

                if (tenSachMoi !== "") {

                    library[viTri] = tenSachMoi;

                    alert(`Đã cập nhật thành công! "${tenSachCu}" --> "${tenSachMoi}"`);
          }

        } else {

          alert("Sách không tồn tại để sửa.");
        }
    }
}

      break;

     case 5:

    if (library.length === 0) {

        alert("Thư viện hiện đang trống, không có gì để đảo ngược.");

    } else {
        library.reverse(); 

        console.log(`Tổng số sách: ${library.length} cuốn\n`);

        for (let index in library) {
            let viTri = Number(index);
            console.log(`Vị trí [${viTri}]: ${library[viTri]}`);
        }

        alert("đã đảo ngược vị trí vui lòng kiểm tra F12.");
    }
    break;

      case 6:

        let externalLibrary = ["Sách Kỹ Năng", "Truyện Tranh"];

        library = library.concat(externalLibrary);

        alert("Đã gộp kho sách từ chi nhánh khác thành công.");

        break;


      case 7:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
        break;
    }

 } while(choice !== 7);