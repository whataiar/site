import React from 'react';
import { Container } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import dayjs from 'dayjs';

import { siteInfoStore } from '@/stores';

const Index = () => {
  const fullYear = dayjs().format('YYYY');
  const siteName = siteInfoStore((state) => state.siteInfo.name);
  const cc = `${fullYear} ${siteName}`;
  return (
    <footer className="bg-light">
      <Container className="py-3">
        <p className="text-center mb-0 small text-secondary">
          <Trans i18nKey="footer.build_on" values={{ cc }}>
            Creador por
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://42.com.ar/" target="_blank">
              42 Awesome Software
            </a>
            Hecho con amor. © 2022 Answer.
          </Trans>
        </p>
      </Container>
    </footer>
  );
};

export default React.memo(Index);
