import React from 'react';
import { Col } from '.';
import { Row } from '../Row';

export default {
  title: 'Grid',
};

export const simple = () => (
  <Row bgDarker p2>
    <Col md={2} bgLight p2>
      {'md={2}'}
    </Col>
    <Col md={2} bgPrimary p2>
      {'md={2}'}
    </Col>
    <Col md={8} bgLight p2>
      {'md={8}'}
    </Col>
  </Row>
);

export const withoutProps = () => (
  <Row bgDarker p2>
    <Col bgLight p2>
      {'no props'}
    </Col>
    <Col bgPrimary p2>
      {'no props'}
    </Col>
    <Col bgLight p2>
      {'no props'}
    </Col>
  </Row>
);

export const withMultipleBreakpoints = () => (
  <Row bgDarker p2>
    <Col xs={12} sm={8} md={6} lg={4} xl={3} bgLight p2>
      {'xs={12} md={8} sm={6} lg={4} xl={3}'}
    </Col>
  </Row>
);

export const offset = () => (
  <Row bgDarker p2>
    <Col md={6} mdOffset={6} bgLight p2>
      Offset column (only on md)
    </Col>
  </Row>
);

export const nestedGrid = () => (
  <Row bgDarker noPadding p2>
    <Col md={6} bgDark p2>
      <Row bgLight>
        <Col md={6} bgLight p2>
          {'md={6}'}
        </Col>
        <Col md={6} bgPrimary p2>
          <Row bgLight>
            <Col md={6} bgLight p2>
              {'md={6}'}
            </Col>
            <Col md={6} bgPrimary p2>
              {'md={6}'}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);
