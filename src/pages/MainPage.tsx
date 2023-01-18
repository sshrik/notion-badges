import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Badge from 'components/Badge';
import * as S from 'components/Container.style';

const MainPage: React.FC = () => {
  const { t } = useTranslation();

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
          <S.Title>{t('title')}</S.Title>
          <S.Label>{t('badge-name-label')}</S.Label>
          <S.Input
            id="name"
            type="text"
            placeholder={t('badge-name-placeholder')}
            {...register('name', { required: true })}
          />
          <S.Label>{t('badge-value-label')}</S.Label>
          <S.Input
            id="value"
            type="text"
            placeholder={t('badge-value-placeholder')}
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
