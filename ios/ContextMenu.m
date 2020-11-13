#import "ContextMenu.h"
#import "ContextMenuView.h"

@implementation ContextMenu

RCT_EXPORT_MODULE()

- (UIView *) view {
  return [[ContextMenuView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(title, NSString)
RCT_EXPORT_VIEW_PROPERTY(previewController, NSString)
RCT_EXPORT_VIEW_PROPERTY(previewControllerProperties,NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(previewControllerHeight,NSInteger)
RCT_EXPORT_VIEW_PROPERTY(previewControllerWidth,NSInteger)
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCancel, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(actions, NSArray<ContextMenuAction>)

@end
