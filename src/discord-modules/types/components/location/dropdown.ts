import React from 'react';

export interface LocationProps {
  page?: string;
  root?: boolean;
}

export interface Location extends React.ComponentClass<LocationProps> {}
