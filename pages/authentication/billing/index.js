import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import commerce from '../../../src/store/commerce';

import { firestore, storage } from "../../../src/config/firebase";

import { withProtected } from "../../../src/hook/route";

function Billing({auth}) {
    const { user } = auth;
    return (
        <div>
            
        </div>
    )
}

export default withProtected(Billing)
