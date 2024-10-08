import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FIRESTORE } from '../../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, getDocs  } from 'firebase/firestore';
import { AppDispatch } from '../store/store';  // Import AppDispatch để sử dụng khi dispatch action

// Interface for user data
interface UserData {
    fullName: string;
    phoneNumber: string;
    department: string;
    birthday: string; // Bạn có thể lưu chuỗi ngày sinh đã format
    avatarIMG?: string; 
    gender: string;
    noodlesLeft: number;
    docId?: string;
}

// Initial state
interface UserState {
    userData: { 
        [phoneNumber: string]: UserData | null;  // Lưu thông tin của nhiều người dùng
    };
}
// Chuyển đổi Timestamp thành chuỗi ngày
const formatTimestampToDate = (timestamp: any): string => {

    if (timestamp && timestamp.seconds) {
        // Chuyển đổi từ Firestore Timestamp thành đối tượng Date
        const date = new Date(timestamp.seconds * 1000);

        // Tạo đối tượng date ở UTC+7 (nếu múi giờ của bạn là UTC+7)
        const localDate = new Date(date.getTime() + (7 * 60 * 60 * 1000)); // Thêm 7 giờ

        // Sử dụng toLocaleDateString để định dạng ngày tháng theo múi giờ địa phương
        return localDate.toLocaleDateString('en-GB'); // Định dạng dd/mm/yyyy
    }
    return 'Invalid Date';
};


const initialState: UserState = {
    userData: {},  // Object để chứa thông tin nhiều người dùng
};

// Async action để fetch dữ liệu từ Firestore
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (phoneNumber: string): Promise<{ userData: UserData | null, docId: string | null }> => {
    const q = query(
      collection(FIRESTORE, 'users'),
      where('phoneNumber', '==', phoneNumber)
    );

    const snapshot = await getDocs(q);
    console.log("Snapshot size:", snapshot.size);

    if (!snapshot.empty) {
      console.log("User document found");
      const userDoc = snapshot.docs[0].data();
      const docId = snapshot.docs[0].id;  // Lấy ID của tài liệu
      console.log("User data from Firestore:", userDoc);
      console.log("Document ID:", docId);  // Kiểm tra docId

      // Chuyển đổi dữ liệu từ Firestore (DocumentData) thành UserData
      const userData: UserData = {
        fullName: userDoc.fullName || 'Unknown',
        phoneNumber: userDoc.phoneNumber || 0,
        department: userDoc.Department || 'Unknown',
        birthday: formatTimestampToDate(userDoc.Birthday),
        noodlesLeft: userDoc.noodlesLeft || 0,  // Trả về số mì còn lại
        avatarIMG: userDoc.avatarIMG || null,   // Kiểm tra ảnh đại diện
        gender: userDoc.Gender || 'Unknown',
      };

      // Trả về cả userData và docId
      return { userData, docId };
    }

    // Trả về null nếu không tìm thấy người dùng
    return { userData: null, docId: null };
  }
);

  

// Slice quản lý trạng thái người dùng
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUserData.fulfilled, (state, action: PayloadAction<{ userData: UserData | null, docId: string | null }>) => {
        const { userData, docId } = action.payload;
    
        if (userData && userData.phoneNumber && docId) {
          // Lưu thông tin người dùng dựa trên số điện thoại và docId
          state.userData[userData.phoneNumber] = {
            ...userData,
            docId,  // Lưu docId để sau này sử dụng khi cập nhật
          };
        }
      });
    },    
});

export default userSlice.reducer;