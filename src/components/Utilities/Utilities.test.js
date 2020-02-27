import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Div } from './base';

describe('Utility Props API', () => {
  it('matches Div', () => {
    const { container } = render(<Div />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with colored text and background', () => {
    const { container } = render(<Div textLight bgDark />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with padding and margin', () => {
    const { container } = render(<Div m1 p1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with margin and size', () => {
    const { container } = render(<Div m0 mMd2 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with auto margin', () => {
    const { container } = render(<Div mlAuto />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with paddings', () => {
    let container;

    container = render(<Div p1 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div pl1 pr1 pt1 pb1 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div px1 py1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with rounded', () => {
    let container;

    container = render(<Div rounded />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div roundedLeft roundedRight />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div roundedTop roundedBottom />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with roundedCircle', () => {
    const { container } = render(<Div roundedCircle />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with roundedPill', () => {
    const { container } = render(<Div roundedPill />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with colored border', () => {
    const { container } = render(<Div border borderPrimary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with 0 border', () => {
    const { container } = render(<Div border0 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with hidden text', () => {
    const { container } = render(<Div textHide>text</Div>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with truncated text', () => {
    const { container } = render(<Div textTruncate>text</Div>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with word break', () => {
    const { container } = render(<Div textWordBreak>text</Div>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with monospace', () => {
    const { container } = render(<Div textMonospace />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with italic', () => {
    const { container } = render(<Div textItalic />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with clearfix', () => {
    const { container } = render(<Div clearfix />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with text decoration', () => {
    const { container } = render(<Div textDecorationNone />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with text reset', () => {
    const { container } = render(<Div textReset />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with float', () => {
    let container;

    container = render(<Div floatRight />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div floatLeft />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div floatNone />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with transform', () => {
    let container;

    container = render(<Div textLowercase />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textUppercase />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textCapitalize />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with text wrap', () => {
    let container;

    container = render(<Div textWrap />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textNoWrap />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with text align', () => {
    let container;

    container = render(<Div textCenter />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textLeft />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textRight />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textJustify />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with vertical align', () => {
    let container;

    container = render(<Div textBaseline />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textTop />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textBottom />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textTextTop />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textTextBottom />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with width/height', () => {
    let container;

    container = render(<Div w100 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div h50 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div mw75 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div mh25 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div wAuto />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with overflow', () => {
    let container;

    container = render(<Div overflowAuto />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div overflowHidden />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with text weight', () => {
    let container;

    container = render(<Div textWeightBold />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textWeightBolder />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textWeightNormal />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textWeightLight />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div textWeightLighter />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with position', () => {
    let container;

    container = render(<Div positionStatic />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div positionRelative />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div positionAbsolute />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div positionFixed />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div positionSticky />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with shadow', () => {
    let container;

    container = render(<Div shadowNone />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div shadowSmall />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div shadow />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div shadowLarge />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with order', () => {
    const { container } = render(<Div order1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with flex direction', () => {
    let container;

    container = render(<Div flexRow />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexRowReverse />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexColumn />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexColumnReverse />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with justify content', () => {
    let container;

    container = render(<Div justifyContentStart />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div justifyContentEnd />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div justifyContentCenter />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div justifyContentSpaceBetween />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div justifyContentSpaceAround />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div justifyContentSpaceEvenly />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with align', () => {
    ['Start', 'End', 'Center', 'Baseline', 'Stretch'].forEach(v => {
      const props = {
        [`alignSelf${v}`]: true,
        [`alignItems${v}`]: true,
        [`alignContent${v}`]: true,
      };

      const { container } = render(<Div {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('matches Div with flex grow', () => {
    let container;

    container = render(<Div flexGrow0 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexGrow />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with flex shrink', () => {
    let container;

    container = render(<Div flexShrink0 />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexShrink />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with flex wrap', () => {
    let container;

    container = render(<Div flexWrap />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexNoWrap />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div flexWrapReverse />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with visibilities', () => {
    let container;

    container = render(<Div visible />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div invisible />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Div with resize', () => {
    let container;

    container = render(<Div resizeNone />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div resizeBoth />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div resizeHorizontal />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div resizeVertical />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Divs with displays', () => {
    let container;

    container = render(<Div dNone />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dInline />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dInlineBlock />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dBlock />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dTable />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dTableCell />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dTableRow />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dFlex />);
    expect(container.firstChild).toMatchSnapshot();

    container = render(<Div dInlineFlex />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches hidden Div', () => {
    const { container } = render(<Div hidden />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
