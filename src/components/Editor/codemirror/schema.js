let Schema = {
  "!top": [
    "Canvas", "StackPanel", "WrapPanel", "DockPanel", "Grid", "UniformGrid",
    "Control", "ContentControl", "UserControl", "Page", "HeaderedContentControl",
    "Border"
  ],
  "!attrs": {
    "x:Name": null,
    "x:Key": null
  },
  ResourceDictionary: {
    children: ["FrameworkTemplate", "Brush", "Transform", "Geometry", "UIElement"]
  },
  UIElement: {
    attrs: {
      AllowDrop: ["True", "False"],
      Clip: "Geometry",
      ClipToBounds: ["True", "False"],
      Focusable: ["True", "False"],
      IsEnabled: ["True", "False"],
      IsHitTestVisible: ["True", "False"],
      IsManipulationEnabled: ["True", "False"],
      OpacityMask: "Brush",
      Opacity: null,
      RenderTransformOrigin: null,
      RenderTransform: "Transform",
      Visibility: ["Collapsed", "Hidden", "Visible"]
    }
  },
  FrameworkElement: {
    attrs: {
      Cursor: [
        "None", "No", "Arrow", "AppStarting", "Cross", "Help", "IBeam", "SizeAll", "SizeNESW", "SizeNS", "SizeNWSE", "SizeWE", "UpArrow", "Wait", "Hand", "Pen",
        "ScrollNS", "ScrollWE", "ScrollAll", "ScrollN", "ScrollS", "ScrollW", "ScrollE", "ScrollNW", "ScrollNE", "ScrollSW", "ScrollSE", "ArrowCD"
      ],
      DataContext: null,
      DefaultStyleKey: null,
      FocusVisualStyle: "Style",
      ForceCursor: ["True", "False"],
      Height: null,
      HorizontalAlignment: ["Left", "Right", "Center", "Stretch"],
      InputScope: [
        "Default", "Url", "FullFilePath", "FileName", "EmailUserName", "EmailSmtpAddress", "LogOnName", "PersonalFullName", "PersonalNamePrefix", "PersonalGivenName",
        "PersonalMiddleName", "PersonalSurname", "PersonalNameSuffix", "PostalAddress", "PostalCode", "AddressStreet", "AddressStateOrProvince", "AddressCity",
        "AddressCountryName", "AddressCountryShortName", "CurrencyAmountAndSymbol", "CurrencyAmount", "Date", "DateMonth", "DateDay", "DateYear", "DateMonthName",
        "DateDayName", "Digits", "Number", "OneChar", "Password", "TelephoneNumber", "TelephoneCountryCode", "TelephoneAreaCode", "TelephoneLocalNumber", "Time",
        "TimeHour", "TimeMinorSec", "NumberFullWidth", "AlphanumericHalfWidth", "AlphanumericFullWidth", "CurrencyChinese", "Bopomofo", "Hiragana", "KatakanaHalfWidth",
        "KatakanaFullWidth", "Hanja", "PhraseList", "RegularExpression", "Srgs", "Xml"
      ],
      LayoutTransform: "Transform",
      Margin: null,
      MaxHeight: null,
      MaxWidth: null,
      MinHeight: null,
      MinWidth: null,
      Name: null,
      OverridesDefaultStyle: ["True", "False"],
      Style: "Style",
      Tag: null,
      ToolTip: null,
      UseLayoutRounding: ["True", "False"],
      VerticalAlignment: ["Top", "Bottom", "Center", "Stretch"],
      Width: null,
      Resources: "ResourceDictionary",
      Triggers: "TriggerBase"
    },
    base: "UIElement"
  },
  Decorator: {
    attrs: {
      Child: "UIElement"
    },
    base: "FrameworkElement",
    children: ["UIElement"]
  },
  Border: {
    attrs: {
      Background: "Brush",
      BorderBrush: "Brush",
      BorderThickness: null,
      CornerRadius: null,
      Padding: null
    },
    base: "Decorator"
  },
  Panel: {
    type: "abstract",
    attrs: {
      Background: "Brush",
      Children: "UIElement"
    },
    base: "FrameworkElement",
    children: ["UIElement"]
  },
  Canvas: {
    attrs: {},
    base: "Panel"
  },
  StackPanel: {
    attrs: {
      Orientation: ["Horizontal", "Vertical"]
    },
    base: "Panel"
  },
  WrapPanel: {
    attrs: {
      ItemWidth: null,
      ItemHeight: null,
      Orientation: ["Horizontal", "Vertical"]
    },
    base: "Panel"
  },
  DockPanel: {
    attrs: {
      LastChildFill: ["True", "False"]
    },
    base: "Panel"
  },
  Grid: {
    attrs: {},
    base: "Panel"
  },
  UniformGrid: {
    attrs: {},
    base: "Panel"
  },
  Control: {
    attrs: {
      Background: "Brush",
      BorderBrush: "Brush",
      BorderThickness: null,
      FontFamily: null,
      FontSize: null,
      FontStretch: ["UltraCondensed", "ExtraCondensed", "Condensed", "SemiCondensed", "Normal", "Medium", "SemiExpanded", "Expanded", "ExtraExpanded", "UltraExpanded"],
      FontStyle: ["Normal", "Oblique", "Italic"],
      FontWeight: ["Thin", "ExtraLight", "UltraLight", "Light", "SemiLight", "Normal", "Regular", "Medium", "DemiBold", "SemiBold", "Bold", "ExtraBold", "UltraBold", "Black", "Heavy", "ExtraBlack", "UltraBlack"],
      Foreground: "Brush",
      HorizontalContentAlignment: ["Left", "Center", "Right", "Stretch"],
      IsTabStop: ["True", "False"],
      Padding: null,
      TabIndex: null,
      Template: "ControlTemplate",
      VerticalContentAlignment: ["Top", "Center", "Bottom", "Stretch"]
    },
    base: "FrameworkElement"
  },
  ContentControl: {
    attrs: {
      Content: "UIElement"
    },
    base: "Control",
    children: ["UIElement"]
  },
  UserControl: {
    attrs: {},
    base: "ContentControl",
  },
  Page: {
    attrs: {},
    base: "UserControl"
  },
  ButtonBase: {
    type: "abstract",
    attrs: {
      ClickMode: null,
      Command: null,
      CommandParameter: null
    },
    base: "ContentControl"
  },
  Button: {
    attrs: {},
    base: "ButtonBase"
  },
  Shape: {
    type: "abstract",
    attrs: {
      Fill: "Brush",
      Stretch: ["None", "Fill", "Uniform", "UniformToFill"],
      Stroke: "Brush",
      StrokeDashArray: null,
      StrokeDashCap: ["Flat", "Square", "Round", "Triangle"],
      StrokeDashOffset: null,
      StrokeEndLineCap: ["Flat", "Square", "Round", "Triangle"],
      StrokeLineJoin: ["Miter", "Bevel", "Round"],
      StrokeMiterLimit: null,
      StrokeStartLineCap: ["Flat", "Square", "Round", "Triangle"],
      StrokeThickness: null
    },
    base: "FrameworkElement"
  },
  Rectangle: {
    attrs: {},
    base: "Shape"
  },
  Ellipse: {
    attrs: {},
    base: "Shape"
  },
  Line: {
    attrs: {
      X1: null,
      X2: null,
      Y1: null,
      Y2: null
    },
    base: "Shape"
  },
  Path: {
    attrs: {
      Data: "Geometry"
    },
    base: "Shape"
  },
  Brush: {
    type: "abstract",
    attrs: {
      Opacity: null,
      RelativeTransform: "Transform",
      Transform: "Transform"
    }
  },
  SolidColorBrush: {
    attrs: {
      Color: null
    },
    base: "Brush"
  },
  GradientBrush: {
    type: "abstract",
    attrs: {
      ColorInterpolationMode: ["ScRgbLinearInterpolation", "SRgbLinearInterpolation"],
      GradientStops: null,
      MappingMode: ["Absolute", "RelativeToBoundingBox"],
      SpreadMethod: ["Pad", "Reflect", "Repeat"]
    },
    base: "Brush",
    children: ["GradientStop"]
  },
  GradientStop: {
    attrs: {
      Offset: null,
      Color: null
    }
  },
  LinearGradientBrush: {
    attrs: {
      StartPoint: null,
      EndPoint: null
    },
    base: "GradientBrush"
  },
  RadialGradientBrush: {
    attrs: {
      Center: null,
      GradientOrigin: null,
      RadiusX: null,
      RadiusY: null
    },
    base: "GradientBrush"
  },
  TileBrush: {
    type: "abstract",
    attrs: {
      AlignmentX: ["Left", "Right", "Center"],
      AlignmentY: ["Top", "Bottom", "Center"],
      Stretch: ["None", "Fill", "Uniform", "UniformToFill"],
      TileMode: ["None", "Tile", "FlipX", "FlipY", "FlipXY"],
      Viewbox: null,
      ViewboxUnits: ["Absolute", "RelativeToBoundingBox"],
      Viewport: null,
      ViewportUnits: ["Absolute", "RelativeToBoundingBox"]
    },
    base: "Brush"
  },
  ImageBrush: {
    attrs: {
      ImageSource: null
    },
    base: "TileBrush"
  },
  VisualBrush: {
    attrs: {
      Visual: "FrameworkElement"
    },
    base: "TileBrush"
  },
  Transform: {
    attrs: {}
  },
  TransformGroup: {
    attrs: {
      Children: "Transform"
    },
    base: "Transform",
    children: ["Transform"]
  },
  TranslateTransform: {
    attrs: {
      X: null,
      Y: null
    },
    base: "Transform",
  },
  ScaleTransform: {
    attrs: {
      ScaleX: null,
      ScaleY: null
    },
    base: "Transform"
  },
  SkewTransform: {
    attrs: {
      AngleX: null,
      AngleY: null,
      CenterX: null,
      CenterY: null
    },
    base: "Transform"
  },
  RotateTransform: {
    attrs: {
      Angle: null,
      CenterX: null,
      CenterY: null
    },
    base: "Transform"
  },
  Geometry: {
    attrs: {
      Transform: "Transform"
    }
  },
  GeometryGroup: {
    attrs: {
      Children: "Transform",
      FillRule: ["EvenOdd", "Nonzero"]
    },
    base: "Geometry",
    children: ["Geometry"]
  },
  CombinedGeometry: {
    attrs: {
      Geometry1: "Geometry",
      Geometry2: "Geometry",
      GeometryCombineMode: ["Union", "Intersect", "Xor", "Exclude"]
    },
    base: "Geometry"
  },
  RectangleGeometry: {
    attrs: {
      RadiusX: null,
      RadiusY: null,
      Rect: null
    },
    base: "Geometry"
  },
  EllipseGeometry: {
    attrs: {
      Center: null,
      RadiusX: null,
      RadiusY: null
    },
    base: "Geometry"
  },
  LineGeometry: {
    attrs: {
      StartPoint: null,
      EndPoint: null
    },
    base: "Geometry"
  },
  StreamGeometry: {
    attrs: {
      FillRule: ["EvenOdd", "Nonzero"]
    },
    base: "Geometry"
  },
  PathGeometry: {
    attrs: {
      FillRule: ["EvenOdd", "Nonzero"],
      Figures: "PathFigure"
    },
    base: "Geometry",
    children: ["PathFigure"]
  },
  PathFigure: {
    attrs: {
      IsClosed: ["True", "False"],
      IsFilled: ["True", "False"],
      Segments: "PathSegment"
    },
    children: ["PathSegment"]
  },
  PathSegment: {
    type: "abstract",
    attrs: {
      IsSmoothJoin: ["True", "False"],
      IsStroked: ["True", "False"]
    }
  },
  ArcSegment: {
    attrs: {
      Point: null,
      Size: null,
      RotationAngle: null,
      IsLargeArc: ["True", "False"],
      SweepDirection: ["Counterclockwise", "Clockwise"]
    },
    base: "PathSegment"
  },
  LineSegment: {
    attrs: {
      Point: null
    },
    base: "PathSegment"
  },
  QuadraticBezierSegment: {
    attrs: {
      Point1: null,
      Point2: null
    },
    base: "PathSegment"
  },
  BezierSegment: {
    attrs: {
      Point1: null,
      Point2: null,
      Point3: null
    },
    base: "PathSegment"
  },
  PolyLineSegment: {
    attrs: {
      Points: null
    },
    base: "PathSegment"
  },
  PolyQuadraticBezierSegment: {
    attrs: {
      Points: null
    },
    base: "PathSegment"
  },
  PolyBezierSegment: {
    attrs: {
      Points: null
    },
    base: "PathSegment"
  },
  FrameworkTemplate: {
    type: "abstract",
    attrs: {
      Resources: "ResourceDictionary",
      VisualTree: "FrameworkElement",
      Triggers: "TriggerBase"
    },
    children: ["FrameworkElement"]
  },
  ControlTemplate: {
    attrs: {
      TargetType: null
    },
    base: "FrameworkTemplate"
  },
  DataTemplate: {
    attrs: {
      DataType: null
    },
    base: "FrameworkTemplate"
  },
  Style: {
    attrs: {
      Resources: "ResourceDictionary",
      Setters: "Setter",
      Triggers: "TriggerBase"
    },
    children: ["Setter"]
  },
  TriggerBase: {
    type: "abstract",
    attrs: {
      EnterActions: null,
      ExitActions: null
    }
  },
  Trigger: {
    attrs: {
      Property: null,
      Value: null,
      SourceName: null,
      Setters: "Setter"
    },
    base: "TriggerBase",
    children: ["Setter"]
  },
  MultiTrigger: {
    attrs: {
      Conditions: "Condition",
      Setters: "Setter"
    },
    base: "TriggerBase",
    children: ["Setter"]
  },
  DataTrigger: {
    attrs: {
      Binding: "BindingBase",
      Value: null,
      Setters: "Setter"
    },
    base: "TriggerBase",
    children: ["Setter"]
  },
  MultiDataTrigger: {
    attrs: {
      Conditions: "Condition",
      Setters: "Setter"
    },
    base: "TriggerBase",
    children: ["Setter"]
  },
  EventTrigger: {
    attrs: {
      Actions: null
    },
    base: "TriggerBase"
  },
  Setter: {
    attrs: {
      Property: null,
      Value: null,
      TargetName: null
    }
  },
  Condition: {
    attrs: {
      Binding: "BindingBase",
      Property: null,
      Value: null
    }
  },
  BindingBase: {
    type: "abstract",
    attrs: {
      Delay: null,
      FallbackValue: null,
      TargetNullValue: null,
      StringFormat: null
    }
  },
  Binding: {
    type: "markup",
    attrs: {
      Path: null,
      ElementName: null,
      Source: null,
      RelativeSource: "RelativeSource",
      Converter: null,
      ConverterParameter: null,
      Mode: ["OneTime", "OneWay", "OneWayToSource", "TwoWay"],
      UpdateSourceTrigger: ["PropertyChanged", "LostFocus", "Explicit"]
    },
    base: "BindingBase"
  },
  MultiBinding: {
    type: "markup",
    attrs: {
      Bindings: "Binding",
      Converter: null,
      ConverterParameter: null,
      Mode: ["OneTime", "OneWay", "OneWayToSource", "TwoWay"],
      UpdateSourceTrigger: ["PropertyChanged", "LostFocus", "Explicit"]
    },
    base: "BindingBase",
    children: ["Binding"]
  },
  TemplateBinding: {
    type: "markup",
    attrs: {
      Property: null
    }
  },
  StaticResource: {
    type: "markup",
    attrs: {
      ResourceKey: null
    }
  },
  DynamicResource: {
    type: "markup",
    attrs: {
      ResourceKey: null
    }
  },
  'x:Type': {
    type: "markup",
    attrs: {
      Type: null,
      TypeName: null
    }
  },
  'x:Static': {
    type: "markup",
    attrs: {
      Member: null
    }
  },
  'x:Null': {
    type: "markup",
    attrs: {}
  }
};

export default Schema