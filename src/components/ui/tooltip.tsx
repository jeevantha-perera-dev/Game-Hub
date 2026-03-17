import {
  Tooltip as ChakraTooltip,
  Portal,
  Box,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends ChakraTooltipProps {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement | null>;
  content: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props;

    if (disabled) return <>{children}</>;

    const tooltip = (
      <ChakraTooltip hasArrow={showArrow} label={content} {...rest}>
        <Box ref={ref} as="span">
          {children}
        </Box>
      </ChakraTooltip>
    );

    if (portalled) {
      return <Portal containerRef={portalRef}>{tooltip}</Portal>;
    }
    return tooltip;
  },
);
