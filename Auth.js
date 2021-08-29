import React, { useState, useEffect, useContext, createContext } from 'react';

import nookies from 'nookies';
import firebaseClient from './firebaseClient';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';