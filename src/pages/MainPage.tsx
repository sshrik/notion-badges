import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Badge from 'components/Badge';
import BadgeForm from 'components/BadgeForm';
import * as S from 'components/Container.style';

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  const { search } = useLocation();

  const [badgeCount, setBadgeCount] = useState(1);

  const [searchParams] = useSearchParams(search);

  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      name: [] as string[],
      value: [] as string[],
    },
  });

  const { getValues } = methods;

  const handleCreateBadge = () => {
    const nameList = JSON.stringify(getValues('name').map((value) => value));
    const valueList = JSON.stringify(getValues('value').map((value) => value));

    navigate(`/?name=${nameList}&value=${valueList}`);
  };

  const handleAddBadge: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (badgeCount < 3) {
      setBadgeCount(badgeCount + 1);
    }
  };

  const handleDeleteBadge = () => {
    if (badgeCount > 1) {
      setBadgeCount(badgeCount - 1);
    }
  };

  const name = searchParams.get('name');

  const value = searchParams.get('value');

  const isNameValueEmpty = !name || !value;

  const isNameValueEmptyArray = name === '[]' || value === '[]';

  const isNameValueEmptyStringArray = name === '[""]' || value === '[""]';

  if (
    isNameValueEmpty ||
    isNameValueEmptyArray ||
    isNameValueEmptyStringArray
  ) {
    return (
      <S.Container>
        <S.FormContainer autoComplete="off">
          <FormProvider {...methods}>
            <S.Title>{t('title')}</S.Title>
            {[...Array(badgeCount)].map((_, index) => (
              <BadgeForm
                key={index}
                onDeleteBadge={handleDeleteBadge}
                index={index}
              />
            ))}
            <S.TextButton disabled={badgeCount > 3} onClick={handleAddBadge}>
              {t('add-badge-button-text')}
            </S.TextButton>
            <S.Button onClick={handleCreateBadge}>
              {t('create-badge-button-text')}
            </S.Button>
          </FormProvider>
        </S.FormContainer>
      </S.Container>
    );
  }

  const nameParameterList = JSON.parse(name ?? '[]');

  const valueParameterList = JSON.parse(value ?? '[]');

  const nameCount = nameParameterList.length;

  return (
    <S.BadgeContainer>
      {[...Array(nameCount)].map((_, index) => (
        <Badge
          key={index}
          name={nameParameterList[index]}
          value={valueParameterList[index]}
        />
      ))}
    </S.BadgeContainer>
  );
};

export default MainPage;
