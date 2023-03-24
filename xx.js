

$(document).ready(function () {
let quizJSON=[
  {
    "pointerEvents": false,
    "title": "```java \n public class Compare<T> implements Comparator<T> {\n\n  private List<Comparator<T>> comparators;\n\n  public Compare(List<Comparator<T>> comparators) {\n    this.comparators = comparators;\n  }\n\n  @Override\n  public int compare(T o1, T o2) {\n    for (Comparator<T> comparator : comparators) {\n      int result = comparator.compare(o1, o2);\n      if (result != 0) {\n        return result;\n      }\n    }\n    return 0;\n  }\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n Textual representation for the dependencies.\n\n@return a String containing the dependency tree. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n import numpy as np\nimport warnings\n\ndef find_eq_stress(strains, stresses, tol=1e-10):\n    stress_array = np.array(stresses)\n    strain_array = np.array(strains)\n    \n    equilibrium_mask = np.all(np.abs(strain_array) < tol, axis=(1, 2))\n    equilibrium_stress = stress_array[equilibrium_mask]\n    \n    if len(equilibrium_stress) == 0:\n        warnings.warn(\"No equilibrium stress state found!\")\n        return np.zeros((3,3))\n    elif len(equilibrium_stress) == 1:\n        return equilibrium_stress[0]\n    elif np.allclose(equilibrium_stress[0], equilibrium_stress):\n        return equilibrium_stress[0]\n    else:\n        raise ValueError(\"Multiple equilibrium stress states found. Please specify which one you want or remove extraneous stresses.\") ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n The given Java function is called \"toDateTime\" and is declared as a public static method. It takes four input parameters: a Locale object, a String object, a TimeZone object, and a boolean value. It also throws a PageException if it encounters an error.\n\nThe function is designed to convert a string representation of a date and time into a DateTime object. The Locale object is used to specify the language and region format to use during the conversion. The String object is the input date and time to convert. The TimeZone object is used to specify the time zone of the input date and time. The boolean value is used to determine whether or not to use the common date parser for the conversion.\n\nInternally, the function calls another method with the same name \"toDateTime\" and passes the input parameters and a null value as a fifth parameter. The second method performs the actual conversion and returns a DateTime object. If the DateTime object is null, the function throws a PageException with an error message indicating that the input string could not be converted to a date value.\n\nThe function also provides instructions on how to add custom date and time formats for a given Locale. It throws a PageException with an error message indicating which files to create or extend in order to add custom formats for the Locale in question. \n\nFinally, if the conversion is successful, the function returns the DateTime object. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n // RecordConfigWarnings records all warning events from the replication controller to the\n// associated deployment config. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n Executes the sql and returns a pandas dataframe\n\n        :param sql: the sql statement to be executed (str) or a list of\n            sql statements to execute\n        :type sql: str or list\n        :param parameters: The parameters to render the SQL query with.\n        :type parameters: mapping or iterable ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func toggledAutomatedSync(old, new *appv1.Application) bool {\n    // Check if the new object has an explicitly defined synchronization policy and whether that policy has the Automated flag set\n    if new.Spec.SynchronizationPolicy != nil && new.Spec.SynchronizationPolicy.Automated != nil && *new.Spec.SynchronizationPolicy.Automated {\n        // Check if automated synchronization was previously disabled in the old object\n        if old.Spec.SynchronizationPolicy == nil || old.Spec.SynchronizationPolicy.Automated == nil || !*old.Spec.SynchronizationPolicy.Automated {\n            return true\n        }\n    }\n    return false\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```php \n public function publish($src, $dstDir) {\n\t\t$r = true;\n\t\tforeach(glob($src.'/*') as $file) {\n\t\t\t$dst = $dstDir.'/'.basename($file);\n\t\t\tif(!$this->copy($file, $dst))\n\t\t\t\t$r = false;\n\t\t}\n\t\treturn $r;\n\t} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n import \"github.com/dnsimple/dnsimple-go/dnsimple\"\n\nfunc dnsimpleSuitableZone(hostname string, zones map[string]dnsimple.Zone) *dnsimple.Zone {\n    var zone *dnsimple.Zone = nil\n    for _, z := range zones {\n        if strings.HasSuffix(hostname, z.Name) && (zone == nil || len(z.Name) > len(zone.Name)) {\n            zone = &z\n        }\n    }\n    return zone\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n Load all apis, either as local apis served by the flask app, or as\n        remote apis to be called from whithin the app's endpoints, then start\n        the app server ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "One more solution\n\nadd custom PHP class to listingToolbar\nXML Code\n\nCreate PHP class  <COMPANY><MODULE>\\Component\\ManageControl\">' and extend to Magento\\Ui\\Component\\Container\n\nAdd prepare function and un set component which you don't want to show to specific user roles\n\nI hope it will help for others.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func RecordConfigWarnings(client corev1client.EventsGetter, rc *corev1.ReplicationController, out io.Writer) {\n\tif rc == nil {\n\t\treturn\n\t}\n\tevents, err := client.Events(rc.Namespace).Search(legacyscheme.Scheme, rc)\n\tif err != nil {\n\t\tfmt.Fprintf(out, \"--> Error listing events for replication controller %s: %v\\n\", rc.Name, err)\n\t\treturn\n\t}\n\t// TODO: Do we need to sort the events?\n\tfor _, e := range events.Items {\n\t\tif e.Type == corev1.EventTypeWarning {\n\t\t\tfmt.Fprintf(out, \"-->  %s: %s %s\\n\", e.Reason, rc.Name, e.Message)\n\t\t\tRecordConfigEvent(client, rc, e.Type, e.Reason, e.Message)\n\t\t}\n\t}\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n public static DateTime toDateTime(Locale locale, String str, TimeZone tz, boolean useCommomDateParserAsWell) throws PageException {\n\n\tDateTime dt = toDateTime(locale, str, tz, null, useCommomDateParserAsWell);\n\tif (dt == null) {\n\t    String prefix = locale.getLanguage() + \"-\" + locale.getCountry() + \"-\";\n\t    throw new ExpressionException(\"can't cast [\" + str + \"] to date value\",\n\t\t    \"to add custom formats for \" + LocaleFactory.toString(locale) + \", create/extend on of the following files [\" + prefix + \"datetime.df (for date time formats), \"\n\t\t\t    + prefix + \"date.df (for date formats) or \" + prefix + \"time.df (for time formats)] in the following directory [<context>/lucee/locales].\" + \"\");\n\n\t    // throw new ExpressionException(\"can't cast [\"+str+\"] to date value\");\n\t}\n\treturn dt;\n    } ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def _compute_value(self, pkt):\n        # type: (packet.Packet) -> int\n        \"\"\" Computes the value of this field based on the provided packet and\n        the length_of field and the adjust callback\n\n        @param packet.Packet pkt: the packet from which is computed this field value.  # noqa: E501\n        @return int: the computed value for this field.\n        @raise KeyError: the packet nor its payload do not contain an attribute\n          with the length_of name.\n        @raise AssertionError\n        @raise KeyError if _length_of is not one of pkt fields\n        \"\"\"\n        fld, fval = pkt.getfield_and_val(self._length_of)\n        val = fld.i2len(pkt, fval)\n        ret = self._adjust(val)\n        assert(ret >= 0)\n        return ret ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n import pytz\nimport ephem\nfrom datetime import datetime, date\n\nclass SolarTermCalculator:\n    def solar_term(self, year, degrees, timezone='UTC'):\n        obs = ephem.Observer()\n        obs.lon = degrees / ephem.degree\n        obs.lat = 0\n        obs.date = ephem.Date(datetime(year, 1, 1, tzinfo=pytz.utc))\n        \n        sun = ephem.Sun()\n        sun.compute(obs)\n        diff = (degrees - sun.lon) % 360\n        \n        if diff > 180:\n            diff -= 360\n        \n        date_est = obs.date + diff / 360.0\n        \n        def f(t):\n            obs.date = ephem.Date(t)\n            sun.compute(obs)\n            return (degrees - sun.lon) % 360 - diff\n        \n        solar_date = ephem.Date(ephem.newton(f, date_est))\n        \n        dt = solar_date.datetime().replace(tzinfo=pytz.utc).astimezone(pytz.timezone(timezone))\n        \n        return dt.date() ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```php \n function getPaymentStateLabel($paymentState) {\n  if ($paymentState instanceof PaymentInterface) {\n    $paymentState = $paymentState->getState();\n  }\n  $label = PaymentStates::getLabel($paymentState);\n  return $translator->translate($label);\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "As a language model, I don't have personal preferences, but I can provide some general guidance on the type of information that may be helpful to gather for the Gardening & Landscaping site design and logo. Here are some ideas:\n\n1. Symbols and Images:\n- What specific aspects of gardening and landscaping are important to the community and could be represented in the logo or design? This might include plants, tools, or other elements that are central to the practice.\n- Are there any regional or cultural symbols that could be incorporated into the design?\n\n2. Colors:\n- Are there any colors that are commonly associated with gardening or landscaping? These could be earthy tones like green or brown, or brighter colors like red or yellow.\n- What colors would best represent the mood or feeling of the community? For example, if the community is focused on creating peaceful outdoor spaces, calming blues or greens might be appropriate.\n\n3. Tone/Mood/Feeling:\n- What kind of atmosphere does the community want to create with the design and logo? Do they want something professional and polished, or more playful and whimsical?\n- Are there any specific emotions or moods that the design should evoke, such as calmness or excitement?\n\nOverall, it's important to gather as much input from the community as possible in order to create a design that reflects their values and interests. This might involve reaching out to individual members or conducting surveys to get a sense of what people are looking for. Good luck with the project!",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n The `create_new_info()` function takes in several parameters and returns a Python dictionary with information about the data to be used in a neuroscientific context. The dictionary contains metadata about the dataset, such as the number of channels, layer type, data type, encoding, resolution, voxel offset, and volume size. The `create_new_info()` function also includes an optional mesh and skeletons parameter, which can be used to represent additional metadata about the dataset.\n\nThe input parameters to the `create_new_info()` function are:\n\n- `cls`: This parameter is not used in the function and can be ignored.\n- `num_channels`: An integer that represents the number of channels in the dataset.\n- `layer_type`: A string that represents the type of layer in the dataset.\n- `data_type`: A string or a NumPy dtype object that represents the data type of the dataset.\n- `encoding`: A string that represents the encoding type of the dataset. It can be either 'raw' or 'compressed_segmentation'.\n- `resolution`: A tuple of integers that represents the resolution of the dataset.\n- `voxel_offset`: A tuple of integers that represents the voxel offset of the dataset.\n- `volume_size`: A tuple of integers that represents the size of the volume.\n- `mesh`: An optional parameter that can be used to include mesh data in the dataset. It can be a string representing the path to the mesh data file or None.\n- `skeletons`: An optional parameter that can be used to include skeleton data in the dataset. It can be a string representing the path to the skeleton data file or None.\n- `chunk_size`: A tuple of integers that represents the chunk size of the dataset. Default value is (64, 64, 64).\n- `compressed_segmentation_block_size`: A tuple of integers that represents the compressed segmentation block size of the dataset. Default value is (8, 8, 8).\n- `max_mip`: An integer that represents the maximum mip level of the dataset. Default value is 0.\n- `factor`: A Vec object or a tuple of three integers that represents the factor to downsample the dataset. Default value is Vec(2,2,1).\n\nThe `create_new_info()` function first checks whether the `factor` parameter is a Vec object, and if not, it converts the `factor` parameter to a Vec object. It also checks whether the `data_type` parameter is a string or not, and if not, it converts it to a NumPy dtype object and extracts its name.\n\nThe function then creates a dictionary `info` containing the metadata of the dataset, including `num_channels`, `layer_type`, `data_type`, `scales`, and `compressed_segmentation_block_size` (if applicable). The `scales` parameter contains a list of dictionaries with the scale metadata of the dataset. The first scale in this list corresponds to the highest resolution and includes the `encoding`, `chunk_sizes`, `key`, `resolution`, `voxel_offset`, and `size` metadata. The `key` parameter is a unique string generated by joining the resolution values with an underscore.\n\nThe `create_new_info()` function also generates lower resolution scales by downscaling the highest resolution scale using the `factor` parameter. It repeats this process for `max_mip` iterations, appending each new scale to the `scales` list.\n\nIf `encoding` is 'compressed_segmentation', the `create_new_info()` function also adds `compressed_segmentation_block_size` metadata to the highest resolution scale.\n\nIf `mesh` or `skeletons` parameters are provided, they are added to the `info` dictionary.\n\nFinally, the `create_new_info()` function returns the `info` dictionary as output. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func (si *StructInjector) Acquire() reflect.Value {\n    if si.Scope == Singleton {\n        return reflect.ValueOf(si.initRef).Elem()\n    } else {\n        return reflect.New(si.elemType).Elem()\n    }\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "\u0414\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0440\u043e\u0442 \u0447\u0438\u0441\u043b\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0446\u0438\u043a\u043b\u0430. \u041e\u0434\u0438\u043d \u0438\u0437 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0446\u0438\u043a\u043b `while` \u0434\u043b\u044f \u043f\u043e\u0448\u0430\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430. \u0412\u043e\u0442 \u043a\u0430\u043a \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c:\n\n```\nn = 1234\nreversed_num = 0\n\nwhile n > 0:\n    digit = n % 10\n    reversed_num = reversed_num * 10 + digit\n    n = n // 10\n\nprint(\"\u041f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0435 \u0447\u0438\u0441\u043b\u043e:\", reversed_num)\n```\n\n\u0412 \u044d\u0442\u043e\u043c \u043a\u043e\u0434\u0435 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 `n` \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e `reversed_num`, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0446\u0438\u043a\u043b `while`, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438\u0437 \u0447\u0438\u0441\u043b\u0430 `n` \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u0432 \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u0443\u043c\u043d\u043e\u0436\u0430\u044f \u0435\u0433\u043e \u043d\u0430 10 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0446\u0438\u0444\u0440\u044b \u0432 \u0440\u0430\u0437\u0440\u044f\u0434\u044b \u0435\u0434\u0438\u043d\u0438\u0446, \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432, \u0441\u043e\u0442\u0435\u043d \u0438 \u0442.\u0434.\n\n\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b `%` \u0438 `//`, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0446\u0438\u0444\u0440\u0443 \u0438\u0437 `n` \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u0435 \u0438\u0437 `n`, \u0442\u0430\u043a\u0436\u0435 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u0435 \u0432 `reversed_num`. \u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u0441\u0435 \u0446\u0438\u0444\u0440\u044b \u0431\u044b\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b \u0438 `n` \u0441\u0442\u0430\u043b\u043e \u0440\u0430\u0432\u043d\u044b\u043c 0, \u043c\u044b \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u043c \u0446\u0438\u043a\u043b \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.\n\n\u042d\u0442\u043e\u0442 \u043a\u043e\u0434 \u043a\u043e\u0440\u043e\u0447\u0435, \u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0438 \u0431\u043e\u043b\u0435\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```php \n This is a PHP function called \"getPaymentStateLabel\" which takes one parameter, either a PaymentInterface object or a string representing the state of a payment. The function returns a translated label corresponding to the given payment state.\n\nIf the input parameter is a PaymentInterface object, the function extracts the payment state using the getState() method of the object. Otherwise, it assumes that the input parameter is a string representing the payment state directly.\n\nThe function then retrieves the label for the given payment state using the getLabel() method of the PaymentStates class. Finally, the function uses the translator object to translate the label into the appropriate language and returns the translated label.\n\nIn summary, this function takes a payment state or a PaymentInterface object, retrieves the label corresponding to the payment state using the PaymentStates class, translates the label using the translator object, and returns the translated label. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n The `solar_term` function calculates the date and time of a specific solar term for a given year, longitude degree, and timezone. Solar terms are 24 points in traditional East Asian lunisolar calendars that mark the sun's apparent position in the sky. \n\nThe function expects the following input parameters:\n- `self`: a reference to the instance of the class this function belongs to (not used in the function)\n- `year`: an integer representing the year for which the solar term is to be calculated\n- `degrees`: a float representing the longitude degree of the target solar term, measured in radians\n- `timezone`: a string representing the timezone in which the result should be expressed. The default value is 'UTC'. \n\nThe function first imports the `pytz` and `ephem` libraries. It then computes the current longitude of the sun and determines the difference between that and the target longitude for the specified solar term. It uses this difference to estimate a date around the time of the solar term, and then refines the estimate by finding the exact moment when the sun's longitude matches the target longitude. \n\nThe function does this by defining an inner function, `f(t)`, that computes the difference between the target longitude and the sun's longitude at time `t`. It uses the `newton` method from the `ephem` library to find the root of this function, which corresponds to the time when the sun's longitude matches the target longitude. The result is a `Date` object representing the exact moment of the solar term.\n\nFinally, the function converts the `Date` object to a `datetime` object, applies the timezone offset, and returns the date portion of the result as a `date` object. \n\nNote that the function assumes the input `degrees` parameter is measured in radians, and converts it to degrees using the `degree` attribute of the `ephem` library. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def db_conn(self):\n    if self._db_conn is None:\n        try:\n            self._db_conn = sqlite3.connect(':memory:')\n        except Exception as e:\n            self.handle_error(e)\n    return self._db_conn ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n The given Java function named \"encodeStreamResponse\" encodes a stream response with the provided input parameters and returns a StreamProperty object. This function takes three input parameters: two strings named \"scope\" and \"streamName\" respectively, and a StreamConfiguration object named \"streamConfiguration\". \n\nThe first part of the function creates a new ScalingConfig object and sets its type to either FIXED_NUM_SEGMENTS or BY_RATE_IN_KBYTES_PER_SEC based on the scaling policy of the stream. If the scaling policy type is FIXED_NUM_SEGMENTS, then the minimum number of segments for the stream is set. Otherwise, the target rate and scale factor for scaling are set along with the minimum number of segments.\n\nThe second part of the function creates a RetentionConfig object and sets its type and value based on the retention policy of the stream. If the retention type is SIZE, then the type is set to LIMITED_SIZE_MB and the value is calculated as the retention parameter divided by the conversion factor of 1024 * 1024. If the retention type is TIME, then the type is set to LIMITED_DAYS and the value is calculated by converting the retention parameter (which is in milliseconds) to days using the Duration class.\n\nThe final part of the function creates a StreamProperty object and sets its scope name, stream name, scaling policy, and retention policy based on the values set in the previous parts of the function. The StreamProperty object is then returned as the output of the function.\n\nIn summary, this function takes input parameters for a stream's scope, name, scaling policy, and retention policy, and returns a StreamProperty object that encodes these properties. It performs some calculations and conversions to set the scaling and retention policies correctly. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def create_new_info(cls, \n    num_channels, layer_type, data_type, encoding, \n    resolution, voxel_offset, volume_size, \n    mesh=None, skeletons=None, chunk_size=(64,64,64),\n    compressed_segmentation_block_size=(8,8,8),\n    max_mip=0, factor=Vec(2,2,1) \n  ):\n    \"\"\"\n    Used for creating new neuroglancer info files.\n\n    Required:\n      num_channels: (int) 1 for grayscale, 3 for RGB \n      layer_type: (str) typically \"image\" or \"segmentation\"\n      data_type: (str) e.g. \"uint8\", \"uint16\", \"uint32\", \"float32\"\n      encoding: (str) \"raw\" for binaries like numpy arrays, \"jpeg\"\n      resolution: int (x,y,z), x,y,z voxel dimensions in nanometers\n      voxel_offset: int (x,y,z), beginning of dataset in positive cartesian space\n      volume_size: int (x,y,z), extent of dataset in cartesian space from voxel_offset\n    \n    Optional:\n      mesh: (str) name of mesh directory, typically \"mesh\"\n      skeletons: (str) name of skeletons directory, typically \"skeletons\"\n      chunk_size: int (x,y,z), dimensions of each downloadable 3D image chunk in voxels\n      compressed_segmentation_block_size: (x,y,z) dimensions of each compressed sub-block\n        (only used when encoding is 'compressed_segmentation')\n      max_mip: (int), the maximum mip level id.\n      factor: (Vec), the downsampling factor for each mip level\n\n    Returns: dict representing a single mip level that's JSON encodable\n    \"\"\"\n    if not isinstance(factor, Vec):\n      factor = Vec(*factor)\n\n    if not isinstance(data_type, str):\n      data_type = np.dtype(data_type).name\n\n    info = {\n      \"num_channels\": int(num_channels),\n      \"type\": layer_type,\n      \"data_type\": data_type,\n      \"scales\": [{\n        \"encoding\": encoding,\n        \"chunk_sizes\": [chunk_size],\n        \"key\": \"_\".join(map(str, resolution)),\n        \"resolution\": list(map(int, resolution)),\n        \"voxel_offset\": list(map(int, voxel_offset)),\n        \"size\": list(map(int, volume_size)),\n      }],\n    }\n    \n    fullres = info['scales'][0]\n    factor_in_mip = factor.clone()\n \n    # add mip levels\n    for _ in range(max_mip):\n      new_resolution = list(map(int, Vec(*fullres['resolution']) * factor_in_mip ))\n      newscale = {\n        u\"encoding\": encoding,\n        u\"chunk_sizes\": [ list(map(int, chunk_size)) ],\n        u\"key\": \"_\".join(map(str, new_resolution)),\n        u\"resolution\": new_resolution,\n        u\"voxel_offset\": downscale(fullres['voxel_offset'], factor_in_mip, np.floor),\n        u\"size\": downscale(fullres['size'], factor_in_mip, np.ceil),\n      }\n      info['scales'].append(newscale)\n      factor_in_mip *= factor\n\n    if encoding == 'compressed_segmentation':\n      info['scales'][0]['compressed_segmentation_block_size'] = list(map(int, compressed_segmentation_block_size))\n\n    if mesh:\n      info['mesh'] = 'mesh' if not isinstance(mesh, string_types) else mesh\n\n    if skeletons:\n      info['skeletons'] = 'skeletons' if not isinstance(skeletons, string_types) else skeletons      \n    \n    return info ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n The provided Java function is named \"stringLiteral\", and it takes no input parameters. It throws a \"SourceCodeException\" if it fails to consume a token of type \"STRING_LITERAL\".\n\nThe function begins by calling the \"consumeToken\" method with the argument \"STRING_LITERAL\". The returned \"Token\" object is assigned to the \"valToken\" variable. \n\nThe \"valToken\" object contains information about the parsed token, such as its value, starting and ending line numbers, and starting and ending column numbers.\n\nNext, the function extracts the string value of the token with quotes using the \"image\" property of the \"valToken\" object. This value is assigned to the \"valWithQuotes\" variable.\n\nThen, a new \"StringLiteral\" object is created with the value obtained from \"valWithQuotes\". The quotes are removed from the value using the \"substring\" method. This new \"StringLiteral\" object is assigned to the \"result\" variable.\n\nAfter that, a new \"SourceCodePositionImpl\" object is created with the starting and ending line and column numbers from the \"valToken\" object. This object represents the position in the source code where the string literal was parsed.\n\nFinally, the \"setSourceCodePosition\" method of the \"result\" object is called with the \"position\" object as its argument. This method sets the position of the \"StringLiteral\" object to the one represented by the \"position\" object.\n\nThe function then returns the \"result\" object, which is an instance of the \"StringLiteral\" class. This class represents a string literal in the source code and contains its value and position information. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "Yes, it is possible to improve the resolution of your map in QGIS. Here are a few steps you can follow to improve the resolution:\n\n1. Zoom in to the area you want to display and adjust the scale so that the details of the cells are visible.\n2. Click on the Project menu and select Properties. In the Project Properties dialog box, select the CRS tab and choose an appropriate coordinate reference system for your map.\n3. Go to the Layout Manager and create a new print layout.\n4. In the Print Layout, add a map item and adjust its size and position to fit the layout.\n5. In the map item properties, choose an appropriate scale for your map, and set the DPI (dots per inch) to a higher value (e.g., 300 DPI).\n6. You can also adjust the size of the map canvas and increase the resolution to make the map more detailed.\n7. Preview the layout and make any necessary adjustments to the map item, legends, or other elements.\n8. Export the map as an image, choosing a high-quality image format such as PNG or TIFF, and selecting a high resolution.\n\nBy following these steps, you should be able to improve the resolution of your map and make it more suitable for attaching to a project.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n public Term stringLiteral() throws SourceCodeException\n    {\n        Token valToken = consumeToken(STRING_LITERAL);\n\n        String valWithQuotes = valToken.image;\n\n        StringLiteral result = new StringLiteral(valWithQuotes.substring(1, valWithQuotes.length() - 1));\n\n        // Set the position that the literal was parsed from.\n        SourceCodePosition position =\n            new SourceCodePositionImpl(valToken.beginLine, valToken.beginColumn, valToken.endLine, valToken.endColumn);\n        result.setSourceCodePosition(position);\n\n        return result;\n    } ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n Computes the value of this field based on the provided packet and\n        the length_of field and the adjust callback\n\n        @param packet.Packet pkt: the packet from which is computed this field value.  # noqa: E501\n        @return int: the computed value for this field.\n        @raise KeyError: the packet nor its payload do not contain an attribute\n          with the length_of name.\n        @raise AssertionError\n        @raise KeyError if _length_of is not one of pkt fields ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def save_state_machine(delete_old_state_machine=False, recent_opened_notification=False, as_copy=False, copy_path=None):\n    \"\"\" Save selected state machine\n\n     The function checks if states of the state machine has not stored script data abd triggers dialog windows to\n     take user input how to continue (ignoring or storing this script changes).\n     If the state machine file_system_path is None function save_state_machine_as is used to collect respective path and\n     to store the state machine.\n     The delete flag will remove all data in existing state machine folder (if plugins or feature use non-standard\n     RAFCON files this data will be removed)\n\n    :param bool delete_old_state_machine: Flag to delete existing state machine folder before storing current version\n    :param bool recent_opened_notification: Flag to insert path of state machine into recent opened state machine paths\n    :param bool as_copy: Store state machine as copy flag e.g. without assigning path to state_machine.file_system_path\n    :return: True if the storing was successful, False if the storing process was canceled or stopped by condition fail\n    :rtype bool:\n    \"\"\"\n\n    state_machine_manager_model = rafcon.gui.singleton.state_machine_manager_model\n    states_editor_ctrl = rafcon.gui.singleton.main_window_controller.get_controller('states_editor_ctrl')\n\n    state_machine_m = state_machine_manager_model.get_selected_state_machine_model()\n    if state_machine_m is None:\n        logger.warning(\"Can not 'save state machine' because no state machine is selected.\")\n        return False\n\n    previous_path = state_machine_m.state_machine.file_system_path\n    previous_marked_dirty = state_machine_m.state_machine.marked_dirty\n    all_tabs = list(states_editor_ctrl.tabs.values())\n    all_tabs.extend(states_editor_ctrl.closed_tabs.values())\n    dirty_source_editor_ctrls = [tab_dict['controller'].get_controller('source_ctrl') for tab_dict in all_tabs if\n                                 tab_dict['source_code_view_is_dirty'] is True and\n                                 tab_dict['state_m'].state.get_state_machine().state_machine_id ==\n                                 state_machine_m.state_machine.state_machine_id]\n\n    for dirty_source_editor_ctrl in dirty_source_editor_ctrls:\n        state = dirty_source_editor_ctrl.model.state\n        message_string = \"The source code of the state '{}' (path: {}) has not been applied yet and would \" \\\n                         \"therefore not be saved.\\n\\nDo you want to apply the changes now?\" \\\n                         \"\".format(state.name, state.get_path())\n        if global_gui_config.get_config_value(\"AUTO_APPLY_SOURCE_CODE_CHANGES\", False):\n            dirty_source_editor_ctrl.apply_clicked(None)\n        else:\n            dialog = RAFCONButtonDialog(message_string, [\"Apply\", \"Ignore changes\"],\n                                        message_type=Gtk.MessageType.WARNING, parent=states_editor_ctrl.get_root_window())\n            response_id = dialog.run()\n            state = dirty_source_editor_ctrl.model.state\n            if response_id == 1:  # Apply changes\n                logger.debug(\"Applying source code changes of state '{}'\".format(state.name))\n                dirty_source_editor_ctrl.apply_clicked(None)\n\n            elif response_id == 2:  # Ignore changes\n                logger.debug(\"Ignoring source code changes of state '{}'\".format(state.name))\n            else:\n                logger.warning(\"Response id: {} is not considered\".format(response_id))\n                return False\n            dialog.destroy()\n\n    save_path = state_machine_m.state_machine.file_system_path\n    if not as_copy and save_path is None or as_copy and copy_path is None:\n        if not save_state_machine_as(as_copy=as_copy):\n            return False\n        return True\n\n    logger.debug(\"Saving state machine to {0}\".format(save_path))\n\n    state_machine_m = state_machine_manager_model.get_selected_state_machine_model()\n    sm_path = state_machine_m.state_machine.file_system_path\n\n    storage.save_state_machine_to_path(state_machine_m.state_machine, copy_path if as_copy else sm_path,\n                                       delete_old_state_machine=delete_old_state_machine, as_copy=as_copy)\n    if recent_opened_notification:\n        global_runtime_config.update_recently_opened_state_machines_with(state_machine_m.state_machine)\n    state_machine_m.store_meta_data(copy_path=copy_path if as_copy else None)\n    logger.debug(\"Saved state machine and its meta data.\")\n    library_manager_model.state_machine_was_stored(state_machine_m, previous_path)\n    return True ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n Compares two objects starting with first comparator; if they are equals\nproceeds to the next comparator and so on. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n This Go function named \"remove\" is a method of a struct type \"VLANsTable\". It takes a single parameter \"c\" of type \"context.Context\" and returns an error. \n\nThe purpose of the function is to remove VLANs from the table in the database. It first checks if there are any removals to be made. If there are none, it returns nil. Otherwise, it gets a database connection and prepares a SQL statement to delete VLANs from the table by their ID. If there is an error preparing the statement, it returns the error.\n\nThe function then loops over the removals list, executing the SQL statement for each VLAN in the list. The function removes each VLAN from the table and updates the slice of VLANs at the end using a deferred function. This is done for efficiency reasons, as updating the slice once at the end is more efficient than for each removal. \n\nIf an error occurs during execution of the SQL statement, the function returns the error, but the deferred function ensures that the slice of VLANs is updated even if the function exits early. The function also logs the removal of each VLAN with its ID using the \"logging\" package. \n\nFinally, the function returns nil if it completes successfully. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n from flask import Flask\nfrom swagger_api_pool import ApiPool\n\nclass ApiServer:\n    def __init__(self, path_apis, port, apis):\n        self.path_apis = path_apis\n        self.port = port\n        self.apis = apis\n        self.api_pool = ApiPool()\n\n    def start(self, serve=None):\n        if isinstance(serve, str):\n            serve = [serve]\n        elif serve is not None and not isinstance(serve, list):\n            raise ValueError(\"serve argument should be a string or a list of strings\")\n\n        if not serve:\n            raise ValueError(\"serve argument should not be empty\")\n\n        for api in serve:\n            if not os.path.exists(os.path.join(self.path_apis, f\"{api}.json\")):\n                raise ValueError(f\"{api}.json does not exist in {self.path_apis}\")\n\n        app = Flask(__name__)\n        app.secret_key = 'super_secret_key'\n\n        jwt_secret = app.config.get('JWT_SECRET_KEY')\n        if jwt_secret:\n            app.logger.info(f\"Issuer: {app.config.get('JWT_ISSUER')}, Audience: {app.config.get('JWT_AUDIENCE')}, Secret: {jwt_secret[:8]}\")\n\n        serve.append('ping')\n        app.config['COMPRESS_MIMETYPES'] = ['application/json']\n        app.config['COMPRESS_LEVEL'] = 6\n        app.config['COMPRESS_MIN_SIZE'] = 500\n\n        not_persistent = []\n        for api in self.apis:\n            do_persist = False\n            local = False\n            if api['name'] in serve:\n                api['host'] = 'localhost'\n                api['port'] = self.port\n                do_persist = True\n                local = True\n            else:\n                not_persistent.append(api['name'])\n\n            self.api_pool.load_api(api['name'], api['spec'], api['host'], api['port'], do_persist, local)\n\n        @app.after_request\n        def after_request(response):\n            response.headers['Server'] = ''\n            response.headers['X-Content-Type-Options'] = 'nosniff'\n            return response\n\n        @app.errorhandler(Exception)\n        def handle_error(ex):\n            app.logger.error(traceback.format_exc())\n            return {'message': str(ex)}, 500\n\n        if not (os.environ.get('IS_CELERY_WORKER') or os.environ.get('IS_GUNICORN')):\n            app.debug = True\n            app.run(host='0.0.0.0', port=self.port) ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n The function `setTabs` is a method in Java that takes an ArrayList of Strings called `tabs` as input. It checks if the input ArrayList is null or has no elements, in which case it immediately returns without performing any further action. If the platform supports tabs, it creates a new ArrayList called `toAdd` and sets it equal to a subList of `tabs` that contains at most `MAX_TABS` elements, where `MAX_TABS` is a constant value. If `tabs` contains fewer than or equal to `MAX_TABS` elements, `toAdd` is simply set equal to `tabs`. Finally, it sets the `tabs` field of the current object equal to the result of converting `toAdd` into an array of Strings.\n\nIf the platform does not support tabs, the function logs an error message using the `Logger` class and returns without modifying any fields. The error message indicates that the `com.android.support:design` library needs to be upgraded to version `28.0.0` to enable tabs for the App Inbox.\n\nIn summary, `setTabs` is a method that sets the `tabs` field of an object to an array of Strings based on the input ArrayList of Strings, subject to certain constraints. It also logs an error message if the platform does not support tabs. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func (vt *VLANsTable) remove(c context.Context) error {\n    removals := vt.getRemovals()\n    if len(removals) == 0 {\n        return nil\n    }\n\n    db := vt.getDB()\n    defer vt.updateVLANs()\n\n    stmt, err := db.Prepare(\"DELETE FROM vlans WHERE id=?\")\n    if err != nil {\n        return err\n    }\n\n    for _, vlan := range removals {\n        _, err := stmt.Exec(vlan.ID)\n        if err != nil {\n            log.Printf(\"Error removing VLAN with ID %d: %s\", vlan.ID, err)\n            return err\n        }\n        log.Printf(\"Removed VLAN with ID %d\", vlan.ID)\n    }\n\n    return nil\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n The given Python function `_to_sqlite3_by_table` is a method that accepts three parameters: `self`, `conn`, and `table_name`. It appears to be a helper function for inserting data into an SQLite3 database table. \n\nThis function uses a nested function called `_insert_item` to handle inserting each item into the specified table. `_insert_item` takes an `item` parameter and determines the appropriate method for inserting it into the table based on its type. \n\nIf `item` is a dictionary, the keys are used as column names and the values as values for the new record. `_fields` are used if `item` is a named tuple, while a list or tuple item is treated as a list of values to insert. If the item type is none of the above, a `TypeError` exception is raised.\n\nFinally, the `_to_sqlite3_by_table` method calls `self.for_each(_insert_item)` where `self` is an instance of another class, and `_insert_item` is the method that inserts each item into the SQLite3 table.\n\nIn summary, `_to_sqlite3_by_table` function is a helper method for inserting data into an SQLite3 table, and it uses a nested function `_insert_item` to handle the insertion of each item. The function accepts three parameters: `self`, `conn`, and `table_name`. It determines the appropriate method for inserting data based on the data type and calls `self.for_each(_insert_item)` to insert the data into the table. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def _fake_openassociatorinstances(self, namespace, **params):\n        \"\"\"\n        Implements WBEM server responder for\n        WBEMConnection.OpenAssociatorInstances\n        with data from the instance repository.\n        \"\"\"\n        self._validate_namespace(namespace)\n        self._validate_open_params(**params)\n        params['ObjectName'] = params['InstanceName']\n        del params['InstanceName']\n\n        result = self._fake_associators(namespace, **params)\n\n        objects = [] if result is None else [x[2] for x in result[0][2]]\n\n        return self._open_response(objects, namespace,\n                                   'PullInstancesWithPath', **params) ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n public static final StreamProperty encodeStreamResponse(String scope, String streamName, final StreamConfiguration streamConfiguration) {\n        ScalingConfig scalingPolicy = new ScalingConfig();\n        if (streamConfiguration.getScalingPolicy().getScaleType() == ScalingPolicy.ScaleType.FIXED_NUM_SEGMENTS) {\n            scalingPolicy.setType(ScalingConfig.TypeEnum.valueOf(streamConfiguration.getScalingPolicy().\n                    getScaleType().name()));\n            scalingPolicy.setMinSegments(streamConfiguration.getScalingPolicy().getMinNumSegments());\n        } else {\n            scalingPolicy.setType(ScalingConfig.TypeEnum.valueOf(streamConfiguration.getScalingPolicy().\n                    getScaleType().name()));\n            scalingPolicy.setTargetRate(streamConfiguration.getScalingPolicy().getTargetRate());\n            scalingPolicy.setScaleFactor(streamConfiguration.getScalingPolicy().getScaleFactor());\n            scalingPolicy.setMinSegments(streamConfiguration.getScalingPolicy().getMinNumSegments());\n        }\n\n        RetentionConfig retentionConfig = null;\n        if (streamConfiguration.getRetentionPolicy() != null) {\n            retentionConfig = new RetentionConfig();\n            switch (streamConfiguration.getRetentionPolicy().getRetentionType()) {\n                case SIZE:\n                    retentionConfig.setType(RetentionConfig.TypeEnum.LIMITED_SIZE_MB);\n                    retentionConfig.setValue(streamConfiguration.getRetentionPolicy().getRetentionParam() / (1024 * 1024));\n                    break;\n                case TIME:\n                    retentionConfig.setType(RetentionConfig.TypeEnum.LIMITED_DAYS);\n                    retentionConfig.setValue(\n                            Duration.ofMillis(streamConfiguration.getRetentionPolicy().getRetentionParam()).toDays());\n                    break;\n            }\n        }\n\n        StreamProperty streamProperty = new StreamProperty();\n        streamProperty.setScopeName(scope);\n        streamProperty.setStreamName(streamName);\n        streamProperty.setScalingPolicy(scalingPolicy);\n        streamProperty.setRetentionPolicy(retentionConfig);\n        return streamProperty;\n    } ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n def _to_sqlite3_by_table(self, conn, table_name):\n    def _insert_item(item):\n        if isinstance(item, dict):\n            columns = ', '.join(item.keys())\n            placeholders = ', '.join('?' * len(item))\n            values = tuple(item.values())\n            conn.execute(f\"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})\", values)\n        elif isinstance(item, tuple) and hasattr(item, '_fields'):\n            columns = ', '.join(item._fields)\n            placeholders = ', '.join('?' * len(item))\n            conn.execute(f\"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})\", item)\n        elif isinstance(item, (list, tuple)):\n            placeholders = ', '.join('?' * len(item))\n            conn.execute(f\"INSERT INTO {table_name} VALUES ({placeholders})\", item)\n        else:\n            raise TypeError(f\"Invalid item type: {type(item)}\")\n\n    self.for_each(_insert_item) ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```php \n function escapeBindings(array &$bindings): array {\n    foreach ($bindings as &$binding) {\n        $binding = htmlentities($binding, ENT_QUOTES, 'UTF-8', false);\n    }\n    return $bindings;\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n // dnsimpleSuitableZone returns the most suitable zone for a given hostname and a set of zones. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n import java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.logging.Logger;\n\npublic class ClassName {\n    private static final int MAX_TABS = 10;\n    private String[] tabs;\n\n    public void setTabs(ArrayList<String> tabs) {\n        if (tabs == null || tabs.isEmpty()) {\n            return;\n        }\n        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {\n            ArrayList<String> toAdd = new ArrayList<>();\n            if (tabs.size() > MAX_TABS) {\n                toAdd.addAll(tabs.subList(0, MAX_TABS));\n            } else {\n                toAdd.addAll(tabs);\n            }\n            this.tabs = toAdd.toArray(new String[toAdd.size()]);\n        } else {\n            Logger.getLogger(ClassName.class.getName()).severe(\"Please upgrade com.android.support:design to version 28.0.0 or higher to enable tabs for the App Inbox\");\n        }\n    }\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func (r *Reader) IncludeManifestInData(includeManifestInData bool) *Reader {\n    r.includeManifestInData = includeManifestInData\n    return r\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "I have decided for mermaidjs.\nActually one of my (not mentioned) requirements were JSON as describing language to render the chart. But I can also use their own syntax with a template engine like pebble. mermaidjs has almost all the features I was looking for.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n The provided Java function code defines a method called \"toStatement\". This method returns a new Statement object, which is an anonymous inner class that extends the Statement class. The Statement class is a part of the Java bytecode manipulation library and is used to represent a statement in a Java program.\n\nThe doGen() method of the anonymous inner class is overridden and takes a CodeBuilder adapter as its input parameter. Within the doGen() method, the gen() method is called on the Expression object to generate bytecode instructions for the expression.\n\nAfter generating bytecode instructions for the expression, the result type of the expression is determined by calling the resultType() method. The getSize() method is then called on the result type, and the switch statement is used to perform different actions based on the size of the result type.\n\nIf the result type has a size of 0, an AssertionError is thrown, indicating that void expressions are not allowed. If the result type has a size of 1, the adapter's pop() method is called to remove the top value from the operand stack. If the result type has a size of 2, the adapter's pop2() method is called to remove the top two values from the operand stack. If the result type has a size greater than 2, an AssertionError is thrown.\n\nIn summary, the toStatement() method takes no input parameters and returns a new Statement object. The doGen() method of the anonymous inner class generated by the method generates bytecode instructions for an expression, and then removes values from the operand stack based on the size of the expression's result type. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func (c *ApplicationVersionLifecycleConfig) SetMaxAgeRule(maxAgeRule *MaxAgeRule) *ApplicationVersionLifecycleConfig {\n    c.MaxAgeRule = maxAgeRule\n    return c\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "Writing a wrapper function with an accumulator would work, but might get tricky with the recursion. Another approach is to \"mimic\" your original function by accessing its DownValues. Here are some steps:\n\nLet's say your original function was named SomeFunc. We're going to use Sow/Reap, so we'll come up with a new name: SowSomeFunc.\n\nDefine new arithmetic functions that use Sow. For example:\nSowPlus[expr___] := (Sow[1, \"plus\"]; Plus[expr])\nSowTimes[expr___] := (Sow[1, \"times\"]; Times[expr])\n\nDefine SowSomeFunc by using the DownValues of SomeFunc:\nDownValues[SowSomeFunc] =  DownValues[SomeFunc] /. {Plus -> SowPlus, Times -> SowTimes,  SomeFunc -> SowSomeFunc}\n\nCall SowSomeFunc wrapped in Reap:\nReap[SowSomeFunc[2], {\"plus\", \"times\"}]\n\nThis will return something like {5, {{{1, 1, 1, 1}}, {{1, 1, 1, 1}}}}\n\nSince you want to just tally them, you could provide a function that sums up the counts:\nReapSummary[tag_, reaped_] := Sequence[tag, Total[reaped]]\nand now...\nReap[SowSomeFunc[2], {\"plus\", \"times\"}, ReapSummary]\nwhich should give something like: {5, {{\"plus\", 4}, {\"times\", 4}}}",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n import urllib\n\ndef download_passband(passband, local=True):\n    passbands = list_online_passbands()\n    if passband not in passbands:\n        raise ValueError(f\"Passband {passband} is not available for download.\")\n    url = 'http://github.com/phoebe-project/phoebe2-tables/raw/master/passbands/{}'.format(passband)\n    if local:\n        pbdir = _pbdir_local\n    else:\n        pbdir = _pbdir_global\n    filename = os.path.join(pbdir, passband)\n    try:\n        urllib.urlretrieve(url, filename)\n        print('Passband file {} downloaded and saved to {}.'.format(passband, filename))\n    except IOError:\n        raise IOError(f\"Passband file {passband} could not be downloaded from {url}.\")\n    init_passband(filename) ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n func DeepCopy(in *KubeSchedulerConfiguration) *KubeSchedulerConfiguration {\n\tif in == nil {\n\t\treturn nil\n\t}\n\n\tout := new(KubeSchedulerConfiguration)\n\tin.DeepCopyInto(out)\n\treturn out\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n public String prettyDependencies(Script script) {\n    StringBuilder b = new StringBuilder();\n    \n    // Append current script ID\n    b.append(script.id()).append(\" \");\n    \n    // Iterate through dependencies and append them\n    List<Script> dependencies = script.dependencies();\n    Iterator<Script> iter = dependencies.iterator();\n    int level = 1;\n    while (iter.hasNext()) {\n        Script dependency = iter.next();\n        prettyDependencies(b, !iter.hasNext(), level, dependency);\n    }\n    \n    // Return final string\n    return b.toString();\n}\n\nprivate void prettyDependencies(StringBuilder b, boolean isLast, int level, Script dependency) {\n    // Append indentation\n    for (int i = 0; i < level; i++) {\n        b.append(\"  \");\n    }\n    \n    // Append dependency ID\n    b.append(dependency.id());\n    \n    // Append line break if not last dependency\n    if (!isLast) {\n        b.append(\"\\n\");\n    }\n    \n    // Append dependencies of this dependency\n    List<Script> subDependencies = dependency.dependencies();\n    if (!subDependencies.isEmpty()) {\n        Iterator<Script> iter = subDependencies.iterator();\n        while (iter.hasNext()) {\n            Script subDependency = iter.next();\n            prettyDependencies(b, !iter.hasNext(), level + 1, subDependency);\n        }\n    }\n} ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "e\n\nMake a 6 Sided Circle, use the mirror modifier and extrude a side to form a\nbowtie\"\n\nApply the Mirror modifier and delete the edges/ faces made in the middle\n\nSelect both vertices in the middle and press 'S' to scale them uniformly\ntowards the center to form a slope.\n\nAdd in a Subdivision modifier to  smooth everything.\n\nSelect the whole thing Press 'F' to fill then Select the filled face\nand press 'I' to inset to the desired thickness.\n\nExtrude to get the desired height.\nhope this was what you were looking for.\n\nA:\n\nCreate a mesh circle, go in edit mode:\n\nSelect half of it, press G, X, 3:\n\nNow select these 4 guys here\n\nand subdivide uneven times:\n\nTurn on proportional editing, select these 2 guys in the middle\n\nand move with S and moving your mouse, use scroll wheel to change your influence radius:\n\nNow in edit mode select all, press E to extrude and Z to fix to z-axis, move down. Then add solidify modifier and use autosmooth.\n\nA:\n\nCreate a circle, in Edit mode cut a part, duplicate and rotate 180\u00b0, fill the gap between the 2 circles:\n\nSubdivide once the long edges, select the new vertices and scale down:\n\nBevel these 2 new vertices with Ctrl+B, V:",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```php \n public function renderBehaviorBody($class, $properties, $controllerBuilder)\n    {\n        if (!array_key_exists($class, $this->defaultBehaviorClasses)) {\n            return $this->renderUnknownBehavior($class, $properties);\n        }\n\n        $partial = $this->defaultBehaviorClasses[$class];\n\n        return $this->makePartial('behavior-'.$partial, [\n            'properties'=>$properties,\n            'controllerBuilder' => $controllerBuilder\n        ]);\n    } ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "It seems that the CSS code you provided is responsible for hiding the \"sponsored_content\" role from being displayed on the users screen. The \"!important\" keyword in the CSS code means that this styling takes precedence over other styles applied to the same element.\n\nTo remove this styling, you can try adding your own CSS code to override it. You can add the following code to your theme's stylesheet or to the custom CSS section in the WordPress admin panel:\n\n.sponsored_content {\n    display: block !important;\n}\n\nThis will set the \"display\" property to \"block\", which will make the \"sponsored_content\" role visible on the users screen.\n\nIf this does not work, you can try searching your theme or any plugins for the code that is adding the unwanted CSS. You can use a text editor or an IDE with a global search functionality to search for the class name \"sponsored_content\" or the specific CSS code mentioned above. Once you find the source of the code, you can modify or remove it as needed.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n The `download_passband` function is a Python function that allows a user to download a passband file from the internet and save it to their local or global directory, depending on the value of the `local` argument. A passband file is a text file that contains information about the transmission properties of a filter used in astronomical observations.\n\nThe function takes two arguments: `passband` and `local`. The `passband` argument is a string that specifies the name of the passband file to download. The function checks whether the specified passband file is available in the list of online passbands, which is obtained by calling the `list_online_passbands` function. If the passband file is not available, the function raises a `ValueError` exception with an error message indicating that the passband is not available.\n\nThe `local` argument is a Boolean value that specifies whether to save the downloaded passband file to the local or global directory. If `local` is `True`, the function saves the passband file to the `_pbdir_local` directory. Otherwise, it saves the file to the `_pbdir_global` directory.\n\nThe function then constructs a URL to download the passband file from the internet, using the `passband` argument to specify the name of the file. The URL is constructed using the format string `'http://github.com/phoebe-project/phoebe2-tables/raw/master/passbands/{}'`, where `{}` is replaced with the value of `passband`. The function then logs an informational message indicating that it is downloading the passband file from the specified URL and saving it to the local directory.\n\nThe function attempts to download the passband file using the `urllib.urlretrieve` function, which retrieves the file from the specified URL and saves it to the specified local file. If the download fails due to an `IOError`, the function raises an `IOError` exception with an error message indicating that the passband file could not be downloaded.\n\nIf the download is successful, the function calls the `init_passband` function with the path of the downloaded passband file as an argument. The `init_passband` function initializes the passband by reading the data from the file and setting the appropriate attributes. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n The given python function `_fake_openassociatorinstances` takes in three arguments - `self`, `namespace`, and `**params`. It is a method of a class that performs some validation checks on the `namespace` and `**params` parameters passed as inputs. \n\nThis function first validates the `namespace` parameter using the `_validate_namespace` method. It then validates the `**params` using the `_validate_open_params` method. The `**params` argument is a dictionary that contains various parameters needed for opening an associator instance.\n\nThe function modifies the `params` dictionary by setting the value of `params['ObjectName']` to `params['InstanceName']` and then deletes the `params['InstanceName']` key. It then calls the `_fake_associators` method with the `namespace` and modified `params` arguments.\n\nThe `_fake_associators` method returns a list of tuples where each tuple contains details about an associator instance. This list is then processed to extract the object names and stores them in a list called `objects`. If `_fake_associators` method returns `None`, then an empty list is returned.\n\nFinally, the function returns the output of the `_open_response` method, passing `objects`, `namespace`, 'PullInstancesWithPath', and `**params` as parameters. The `_open_response` method generates a response object containing the list of objects and other metadata.\n\nOverall, the function `_fake_openassociatorinstances` is used for retrieving associator instances given a namespace and specific parameters. The function modifies the `params` dictionary to match the expected input of another internal method and returns a list of associator instance names along with other metadata in a response object. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```go \n // SetMaxAgeRule sets the MaxAgeRule field's value. ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```java \n public Statement toStatement() {\n    return new Statement() {\n      @Override\n      protected void doGen(CodeBuilder adapter) {\n        Expression.this.gen(adapter);\n        switch (resultType().getSize()) {\n          case 0:\n            throw new AssertionError(\"void expressions are not allowed\");\n          case 1:\n            adapter.pop();\n            break;\n          case 2:\n            adapter.pop2();\n            break;\n          default:\n            throw new AssertionError();\n        }\n      }\n    };\n  } ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "First of all I live in the Middle East in the same country as Mt. Ararat where the ark landed. Note this is not in Palestine nor do we know where Noah started from. The problem could just as well have been that he was starting from the Siberian tundra and needed some African wildebeests. You're trying to solve a specific problem that you don't have enough scenario data to build a case for or against.\nHowever back to the plausibility argument. Here in the neighborhood of Mt Ararat there is a zoo here that has penguins. They are kept out of doors and, with the exception of having free access to a small pond, cope with the same baking heat the rest of us deal with. They may not like it but they survive.\nSecondly I grew up in the Southwest high desert. The zoo where I grew up had a polar bear exhibit, again out of doors. In more recent years it has acquired some shade and a larger (very fun looking) series of pools but the one I remember as a kid wasn't much more than a concrete box.\nAs if that wasn't enough to at least cast doubt on the argument against the plausibility of such a thing, let's consider the other implications of the flood.\nHand in hand with the flood come a host of other radical global changes. The arrangement of dry land vs ocean has likely radically changed as tectonic plates rose and fell in order for the water to cover the whole land. How high mountains were, where they were located and even the divides between contents are likely very different.\nIn the same vein, global climate would have been radically different. Many believe from the Genesis account that there were changes in the atmosphere and that likely post-flood earth has a lot more extremes of hot and cold in different areas than pre-flood earth.\nLastly, it's not always alleged that every variation of species we have today was on the Ark. It's possible a representative of the bear family was all that God required to cover the basis for both polar bears and black bears.\nAnd most importantly, don't you think the God who created the animals in the first place and gives them the instincts that make them what they are could not manipulate the system in a miraculous way to lead a couple of stray bears on a long walk? Similar wild and seemingly impossible journeys by strangely motivated animals have been documented\nAll in all, the specific allegations you bring up are small items in the big picture. If you really have a problem with the science, you need to start at the other end of the spectrum and work backwards. Those little details sort themselves out in the big picture.\n\nA:\n\nGen 6:20 reads as follows in the KJV:\n\nOf fowls after their kind, and of cattle after their kind, of every creeping thing of the earth after his kind, two of every sort shall come unto thee, to keep them alive.\n\n(emphasis added)\nThe sense here is that the animals came to Noah, not that Noah went out and got each animal.  I'm not sure that if I were a polar bear, I'd want to walk all the way from the polar regions to the ark, but if God is compelling the animals to come, then come they would have.\nAlso, remember that Noah had been building the ark for 100 years before the flood began, so there was ample time for the animals to reach the ark.\n\nA:\n\nThere are two issues with your question.  First, the assumption the polar bears must have been on the ark.  The Bible specifies that there were two of each \"kind\".  If we take this to mean two of every species that modern science defines, then that would necessitate many more animals on the ark.  If, however, it just means that there were two of each kind, then there would be much fewer animals on the ark.  \nThe idea is that all the genetic information for domestic dogs as well as coyotes (and perhaps wolves) could be contained within two representative wild dogs at the time.  Indeed, we can expose the range of variations in domestic dogs to get Great Danes and Teacup Poodles.\nSo, if there were two bears that contained sufficient genetic information to account for the various species we see today, black, brown, polar, grizzly, etc., then polar bears need not be on the ark, except within the genetic makeup of the two bears that were selected (probably very young bears--one pink and one blue).\nThe other assumption is that the pre-flood climate is basically what we have today as well.  There is sufficient evidence to show that this assumption is probably false.  For example, we find wooly mammoths eating tropical vegetation in what are now arctic regions.  \nBiblically speaking, people lived far longer prior to the flood than they did afterward.  A drastically different climate could certainly account for this.\nSo, Noah probably took one of each \"kind\" rather than one of each of the isolated species we see today.  Noah had 8 people--not 2 Chinese, 2 Europeans, 2 Africans, 2 Native Americans, 2 Computer Programmers, etc.  Also, the climate was likely much different then than it is now.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "Cleaning is done on three levels, as described in a comment in the Linux kernel Makefile:\n###\n# Cleaning is done on three levels.\n# make clean     Delete most generated files\n#                Leave enough to build external modules\n# make mrproper  Delete the current configuration, and all generated files\n# make distclean Remove editor backup files, patch leftover files and the like\n\nAccording to the Makefile, the mrproper target depends on the clean target (see line 1421). Additionally, the distclean target depends on mrproper.\nExecuting make mrproper will therefore be enough as it would also remove the same things as what the clean target would do (and more).\nThe mrproper target was added in 1993 (Linux 0.97.7) and has always depended on the clean target.  This means that it was never necessary to use both targets as in make clean && make mrproper.\nHistoric reference: https://archive.org/details/git-history-of-linux\n\nA:\n\nclean is a prerequisite for mrproper target in Makefile, so executing make clean separately is redundant.",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 1,
    "secondsLeft": 100,
    "AnsweredQue": ""
  },
  {
    "pointerEvents": false,
    "title": "```python \n import pandas.io.sql as psql\n\ndef get_pandas_df(self, query, parameters=None):\n    conn = self.get_conn()\n    result_df = psql.read_sql(query, conn, params=parameters)\n    return result_df ```",
    "choices": [
      "Yes",
      "No"
    ],
    "correctAnswer": 0,
    "secondsLeft": 100,
    "AnsweredQue": ""
  }
]


 quizJSON=JSON.stringify(quizJSON);
const quiz=JSON.parse(quizJSON);
console.log(quiz);
// Json work finished
 
var questionnumber=-1;
let scndsLftOfQueArr=[];
let radioBtnChecked=[];

// Some work for DOM Manipulation start


    $("#mainButton").click(function(){
        $(".quizh1").text("Rules");
        $(".descriptionh3").text("Read the Rules and understand them.");
        $(this).parent().fadeIn();
        $(this).parent().parent().remove();
        $(".info_box").fadeIn();
   });


   $(".quit").click(function(){
    location.reload();
   });

   $(".continue").click(function(){
    $(".quizbody").slideUp(1000);
    $(".questionbody").fadeIn(1000);
    questionnumber++;
    countTotalTime();
    showquestionnum();
    showquestion();
    diablingButtons();
    saveRadioBtnValue();
    // startTimeLeft();
    // checkTODisabelPointer();
   });

   $('.btn').on('mouseenter', function () {
    $(this).addClass('active');
   });
   $('.btn').on('mouseleave', function () {
    $(this).removeClass('active');
   });
   function diablingButtons() {
       if (questionnumber==0) {
         $(".back").addClass('disable');  
       }
       else
       {
         $(".back").removeClass('disable');  
       }
   }
// Some work for DOM Manipulation end

//allowing uncheck the radio button -->
        document.querySelectorAll('input[type=radio][name=option]').forEach((elem) => {
            elem.addEventListener('click', allowUncheck);
            elem.previous = elem.checked;
        });
     

    function allowUncheck(e) {
    if (this.previous) {
        this.checked = false;
    }
    document.querySelectorAll(
        `input[type=radio][name=${this.name}]`).forEach((elem) => {
        elem.previous = elem.checked;
    });
    };
//allowing uncheck the radio button <--

// starting the quiz's logical work
   
   let randomnumber;
   let randomnumarr=[];
   let indexpre=randomnumarr[questionnumber];
   let index =quiz[indexpre];

   //getting the random number function -->
        function getrandomnumber(){
        randomnumber=Math.floor(Math.random()*29)+1;
        };
   //getting the random number function <--

     //checking the Random Number for not getting same number -->
     function checkRandomNumber() {
         for (let i = 0; i < 60; i++) {     
                getrandomnumber()
                let checkRN= jQuery.inArray( randomnumber,  randomnumarr);
                if (checkRN==-1) {
                    randomnumarr[questionnumber]=randomnumber;
                    break;
                }
                }
                indexpre=randomnumarr[questionnumber];
                index =quiz[indexpre]
     }        
    //checking the Random Number for not getting same number <--


    //showing the QUESTIONS function -->
     function showquestion() {
         radioButtons = $("input:radio[name='option']");
         if (questionnumber<randomnumarr.length) {
             indexpre=randomnumarr[questionnumber];
             index =quiz[indexpre]
             
             let tt = marked.parse( index.title);
				 
            $("#myiframe").contents().find('body').html(tt);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
//            $("label").eq(2).text(index.choices[2]);
 //           $("label").eq(3).text(index.choices[3]);
            for (var x = 0; x < radioButtons.length; x++) {
                var idVal = $(radioButtons[x]).attr("id");
                radioBtnCheckedVal=$("label[for='"+idVal+"']").text();
                if (radioBtnCheckedVal === radioBtnChecked[questionnumber]) {
                    radioButtons[x].checked = true;
                }
                if (radioBtnChecked[questionnumber]===" ") {
                    radioButtons[x].checked = false;
                }
            }
            if (questionnumber>0) {
                 resetingTheTime();
             }
             startTimeLeft();
        }
        else
        {
             checkRandomNumber();
			let tt = index.title 
			tt = marked.parse(tt )
//				 tt = "<iframe>"+tt +"</iframe>"

            $("#myiframe").contents().find('body').html(tt);
            $("label").eq(0).text(index.choices[0]);
            $("label").eq(1).text(index.choices[1]);
//            $("label").eq(2).text(index.choices[2]);
//            $("label").eq(3).text(index.choices[3]);
            $("input:radio[name='option']").each(function(i) {
                this.checked = false;
            }); 
            console.log(index.correctAnswer);
            if (questionnumber>0) {
                 resetingTheTime();
             }
             startTimeLeft();
        } 
     };
     //showing the QUESTIONS function <--



    //  starting the time of question start function-->
    let secondSetInterval;
    let width;
    function startTimeLeft() {
      secondSetInterval = setInterval(function () {
          index.secondsLeft-=1;
          width=(index.secondsLeft/60)*100;
        //   $(".time_line").css(
        //       {
        //           "width":`${width}%`,
        //           "transition": "width 1s linear"
        //       }
        //   )
            if (index.secondsLeft<10) {
              $(".timer_sec").text("0" + index.secondsLeft);
            }
            else
            {
                $(".timer_sec").text(index.secondsLeft); 
            }
            if (index.secondsLeft==0) {
            $(".option_list").addClass("pointerNone");
            index.pointerEvents=true;
            $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
            You cannot select any option Now.
            </marquee>`);
            // $(".time_line").hide();
            clearInterval(secondSetInterval);
            }
      },1000);
    };
    //  starting the time of question end function <--


    //  resetting the time of question start function -->
    function resetingTheTime() {
      clearInterval(secondSetInterval);
      secondsForTimeOut=index.secondsLeft;
     scndsLftOfQueArr[questionnumber] = index.secondsLeft;
      secondCount = index.secondsLeft;
      $(".timer_sec").text(index.secondsLeft);    
    };
    //  resetting  the time of question end function <--


    //  starting the time of question start function-->
    let totalSetInterval;
    let totaltime=0;
    function countTotalTime() {
      totalSetInterval = setInterval(function () {
          totaltime+=1;
      },1000);
    };
    //  starting the time of question end function <--


    //  calculating the score and storing the checked values in-->
    let radioBtnCheckedVal;
    function saveRadioBtnValue() {
        $("input:radio[name='option']").each(function(i){
            if($(this).is(':checked'))
            {
                var idVal = $(this).attr("id");
                radioBtnCheckedVal=$("label[for='"+idVal+"']").text();
                return false;
            }
            else{
                radioBtnCheckedVal=" "
            }
        });
          var userAns = radioBtnCheckedVal;
        radioBtnChecked[questionnumber] = userAns;
    }
    // calculating the score <--

     //showing the QUESTIONS Number function -->
     function showquestionnum() {
          $(".QNO").text(questionnumber+1 + " ");
     }
     //showing the QUESTIONS Number function <--


// ending the quiz's logical work

// adding the functionalities to buttons starts

$(".back").click(function(){
        if (questionnumber<60 && questionnumber>=1) {
            $(".result").hide();
            $(".next").show();
            $(".skip").removeClass('disable');
            $("#marquee").remove();
            saveRadioBtnValue();
            clearInterval(secondSetInterval);
            questionnumber--;
            showquestionnum();
            showquestion();
            diablingButtons();
            if (index.pointerEvents===true) {   
              $(".option_list").addClass("pointerNone");
               $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                You cannot select any option Now.
                </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else
            {
             $(".option_list").removeClass("pointerNone");   
            }
            
        }
        else
        {
            diablingButtons();
        }
   });


   $(".next, .skip").click(function(){
        if (questionnumber<59) {
            $("#marquee").remove(); 
            clearInterval(secondSetInterval); 
            saveRadioBtnValue();
            questionnumber++;
            showquestionnum();
            showquestion();
            diablingButtons();
            indexpre=randomnumarr[questionnumber];
            index =quiz[indexpre]
            if (index.pointerEvents===true) {   
              $(".option_list").addClass("pointerNone");
              $(".quiz_box").prepend(`<marquee id="marquee" class="marquee my-2" width="100%" direction="right" height="20px">
                You cannot select any option Now.
                </marquee>`)
                clearInterval(secondSetInterval);
                $(".timer_sec").text("00");
            }
            else
            {
             $(".option_list").removeClass("pointerNone");   
            }
        }
        if (questionnumber==59) {
            $(".skip").addClass('disable');
            $(".next").hide();
            $(".result").show();
        }
   });

//    making a function for checking results -->
let CA=0;
let SA=0;
let WA=0;
function checkResults() {
    for (let i = 0; i < randomnumarr.length; i++) {
        let indexpre=randomnumarr[i];
        let index =quiz[indexpre]; 
        if (radioBtnChecked[i]==index.choices[index.correctAnswer]) {
            CA++;
        }  
        else if (radioBtnChecked[i]== " ") {
            SA++;
        }
        else
        {
             WA++;
        }      
    }
}

//    making a function for checking results <--

// CHECKING THE PECENTAGE

let width1=0;
let perc1=0;
function gettingPerc() {
    perc1=(CA/60)*100;
    perc1=Math.round(perc1);
    width1=perc1;
    $(".perc-line").css({
        "width":`${width1}%`,
        "transition": "width 1s linear"
    });
}

let width2=0;
let perc2=0;
function gettingPercTime() {
    perc2=(totaltime/400)*100;
    width2=perc2;
    $(".time-line").css({
        "width":`${width2}%`,
        "transition": "width 1s linear"
    });
}
// CHECKING THE PECENTAGE




    $(".result").click(function () {
    $(".questionbody").remove();
    $(".resultbody").fadeIn();
    saveRadioBtnValue();
    clearInterval(totalSetInterval);
    checkResults();
    gettingPerc();
    gettingPercTime();
    $(".percentage").text(`${perc1}%`);
    $(".skip-ans-given").text(SA);
    $(".wrong-ans-given").text(WA);
    $(".Correct-ans-given").text(CA);
    $(".time").text(totaltime);
    });
// adding the functionalities to buttons ends
    $(".icons i").click(function () {
        $(this).siblings().css(
            {
                "display" : "none"
            }, 1000);
            $(this).css({
                "color": "#007bff"
            });
    });
    $(".restart").click(function(){
    // location.reload();
      document.write("PLEASE RELOAD THE WEB PAGE location.reload doesnot worked in the code pen so i putted this text.");
   });
});


