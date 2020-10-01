import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.old_Password ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    Alert.alert('Atualização', 'Perfil atualizado com sucesso!');
    // toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    Alert.alert('Falha ao atualizar o perfil, verifique seus dados.');
    // toast.error('🦄 Falha ao atualizar o perfil, verifique seus dados.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
