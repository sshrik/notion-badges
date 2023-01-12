import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Badge from 'components/Badge';
import * as S from 'components/Container.style';

const MainPage: React.FC = () => {
  const { search } = useLocation();

  const [searchParams] = useSearchParams(search);

  const navigate = useNavigate();

  const { register, getValues } = useForm({
    defaultValues: {
      name: '',
      value: '',
    },
  });

  const name = searchParams.get('name');

  const value = searchParams.get('value');

  if (!name || !value) {
    return (
      <S.Container>
        <S.FormContainer autoComplete="off">
          <S.Label>이름</S.Label>
          <S.Input
            id="name"
            type="text"
            placeholder="뱃지 이름"
            {...register('name', { required: true })}
          />
          <S.Label>값</S.Label>
          <S.Input
            id="value"
            type="text"
            placeholder="뱃지 값"
            {...register('value', { required: true })}
          />
          <S.Button
            onClick={() => {
              navigate(
                `/?name=${getValues('name')}&value=${getValues('value')}`
              );
            }}
          >
            생성
          </S.Button>
        </S.FormContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Badge name={name} value={value} />
    </S.Container>
  );
};

export default MainPage;
