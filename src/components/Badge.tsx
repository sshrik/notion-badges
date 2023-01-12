import React from 'react';
import * as S from 'components/Badge.style';

interface BadgeProps {
  name: string;
  value: string;
}

const Badge: React.FC<BadgeProps> = ({ name, value }) => (
  <S.Container>
    <S.Name>{name}</S.Name>
    <S.Value>{value}</S.Value>
  </S.Container>
);

export default Badge;
