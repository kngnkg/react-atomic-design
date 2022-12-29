import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
    const navigate = useNavigate();
    // const { setUserInfo } = useContext(UserContext);

    // useSetRecoilStateは不要な再レンダリングしない
    const setUserInfo = useSetRecoilState(userState);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate("/users");
    };

    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate("/users");
    };

    return (
        <DefaultLayout>
            <SContainer>
                <h2>TOPページです</h2>
                <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
                <br/>
                <br/>
                <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
            </SContainer>
        </DefaultLayout>
    );
};

const SContainer = styled.div`
    text-align: center;
`;