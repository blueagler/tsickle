import { Foo } from './some_module';
export interface Bar {
    foo: Foo;
}
declare global {
    namespace ಠ_ಠ.clutz {
        export { Bar as module$contents$test_files$googmodule_esmodule$declaration$no_externs$user_Bar };
        export namespace module$exports$test_files$googmodule_esmodule$declaration$no_externs$user {
            export { Bar };
        }
    }
}