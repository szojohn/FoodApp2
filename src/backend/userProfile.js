import { currentID, currentUN, currentPW, currentN, currentEM, currentAD, faveArray } from './Verification'

const userProfile = {
    uid: currentID,
    username: currentUN,
    password: currentPW,
    name: currentN,
    email: currentEM,
    admin: currentAD
};

const currentFave = new Array(faveArray);

export { userProfile, currentFave }