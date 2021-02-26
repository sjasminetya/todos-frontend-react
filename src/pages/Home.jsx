import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLabel } from "../configs/redux/actions";
import Navbar from "../component/module/NavbarComponent";
import Admin from "./Admin/Admin";
import { Toast, ToastBody, ToastHeader, Container, Spinner } from "reactstrap";

export default function Home() {
    const dispatch = useDispatch();
    const labelState = useSelector((state) => state.label.listLabel);
    const userState = useSelector((state) => state.user.userLogin);
    const history = useHistory();

    const goTask = (id) => {
        history.push("/task/" + id);
    };

    useEffect(() => {
        dispatch(getAllLabel());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            {userState.role === 1 ? (
                <Admin />
            ) : (
                    <Container>
                        {labelState ? (
                            <div className="p-3 bg-dark my-2 mt-5 rounded" style={{width: 'max-content', margin: 'auto'}}>
                                <h3 style={{color: '#FFFFFF'}} className="text-center">List Label</h3>
                                {labelState.map((item) => (
                                    <Toast key={item.id} onClick={() => goTask(item.id)} className="mt-3 mb-3 ml-5 mr-5" style={{width: '220px', cursor: 'pointer'}}>
                                        {item.label === 'important' ? (
                                            <div>
                                                <ToastHeader icon="danger">
                                                    {item.label}
                                                </ToastHeader>
                                                <ToastBody>
                                                    {item.desc}
                                                </ToastBody>
                                            </div>
                                        ) : (
                                            <div>
                                                <ToastHeader icon="info">
                                                    {item.label}
                                                </ToastHeader>
                                                <ToastBody>
                                                    {item.desc}
                                                </ToastBody>
                                            </div>
                                        )}
                                        
                                    </Toast>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-3 bg-dark my-2 rounded">
                                <Spinner color="primary"/>
                            </div>
                        )}
                    </Container>
                )}
        </div>
    );
}
