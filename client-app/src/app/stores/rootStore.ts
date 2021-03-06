import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import CommenStore from "./commonStore";
import { createContext } from "react";
import { configure } from "mobx";
import ModalStore from "./modalStore";

configure({ enforceActions: 'always' });

export class RootStore {
    activityStore: ActivityStore;
    userStore: UserStore;
    commonStore: CommenStore;
    modalStore: ModalStore
    constructor() {
        this.activityStore = new ActivityStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommenStore(this);
        this.modalStore = new ModalStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());