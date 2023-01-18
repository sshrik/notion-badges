import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import DeleteLogo from 'assets/delete.svg';
import * as S from 'components/BadgeForm.style';

interface BadgeFormProps {
  index: number;
  onDeleteBadge: () => void;
}

const BadgeForm: React.FC<BadgeFormProps> = ({ index, onDeleteBadge }) => {
  const { t } = useTranslation();

  const { register, control } = useFormContext();

  const { remove: removeName } = useFieldArray({ control, name: 'name' });

  const { remove: removeValue } = useFieldArray({ control, name: 'value' });

  const handleDeleteBadge: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    removeName(index);
    removeValue(index);
    onDeleteBadge();
  };

  return (
    <>
      <S.SubTitleContainer>
        <S.SubTitle>{t('badge-subtitle', { index: index + 1 })}</S.SubTitle>
        <S.DeleteButton disabled={index === 0} onClick={handleDeleteBadge}>
          <DeleteLogo />
        </S.DeleteButton>
      </S.SubTitleContainer>
      <S.Label>{t('badge-name-label')}</S.Label>
      <S.Input
        id={`name.${index}`}
        type="text"
        placeholder={t('badge-name-placeholder')}
        {...register(`name.${index}`, { required: true })}
      />
      <S.Label>{t('badge-value-label')}</S.Label>
      <S.Input
        id={`value.${index}`}
        type="text"
        placeholder={t('badge-value-placeholder')}
        {...register(`value.${index}`, { required: true })}
      />
    </>
  );
};

export default BadgeForm;
