import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

// ダミーデータ10件生成
const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `testUser-${val}`,
        image: "https://source.unsplash.com/AUtUMeQnz1Y",
        email: "1111eeeeee@aaa.com",
        phone: "0000-9999-88888",
        company: {
            name: "test株式会社"
        },
        website: "htttttt.com"
        };
});

export const Users = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    
    return (
        <HeaderOnly>
            <SContainer>
                <h2>ユーザー一覧</h2>
                <SearchInput/>
                <SUserArea>
                {users.map(user => <UserCard key={user.id} user={user} isAdmin={isAdmin} />)}
                </SUserArea>
            </SContainer>
        </HeaderOnly>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    // grid-template-columns: 200px 200px 200px;
    grid-gap: 20px;
`;